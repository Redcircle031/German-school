#!/usr/bin/env node

/**
 * Migration Runner Script
 * 
 * Executes all migration scripts in sequence
 * Provides progress tracking and error handling
 * 
 * Usage: node scripts/run-migration.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Migration steps in order
const MIGRATION_STEPS = [
  {
    name: 'Content Analysis',
    script: 'analyze-content.js',
    required: false,
  },
  {
    name: 'Asset Organization',
    script: 'organize-assets.js',
    required: true,
  },
  {
    name: 'HTML to MDX Conversion',
    script: 'html-to-mdx.js',
    required: true,
  },
  {
    name: 'Image Optimization',
    script: 'optimize-images.js',
    required: true,
  },
  {
    name: 'PDF Cataloging',
    script: 'catalog-pdfs.js',
    required: true,
  },
  {
    name: 'Redirect Generation',
    script: 'generate-redirects.js',
    required: true,
  },
  {
    name: 'Sitemap Generation',
    script: 'generate-sitemap.js',
    required: true,
  },
  {
    name: 'Content Validation',
    script: 'validate-content.js',
    required: true,
  },
];

/**
 * Run a single migration step
 */
function runStep(step, index, total) {
  console.log(`\n${'═'.repeat(60)}`);
  console.log(`Step ${index + 1}/${total}: ${step.name}`);
  console.log('═'.repeat(60));
  
  const scriptPath = path.join(__dirname, step.script);
  
  if (!fs.existsSync(scriptPath)) {
    if (step.required) {
      throw new Error(`Required script not found: ${step.script}`);
    } else {
      console.log(`⚠️  Skipping optional script: ${step.script}`);
      return false;
    }
  }
  
  try {
    execSync(`node ${scriptPath}`, {
      stdio: 'inherit',
      cwd: __dirname,
    });
    return true;
  } catch (error) {
    if (step.required) {
      throw new Error(`Failed to run ${step.name}: ${error.message}`);
    } else {
      console.log(`⚠️  Optional step failed: ${step.name}`);
      return false;
    }
  }
}

/**
 * Main migration runner
 */
async function runMigration() {
  console.log('🚀 Starting WBS Content Migration...\n');
  console.log(`Total steps: ${MIGRATION_STEPS.length}`);
  console.log(`Started at: ${new Date().toISOString()}\n`);
  
  const results = {
    startedAt: new Date().toISOString(),
    completedAt: null,
    steps: [],
    success: true,
    errors: [],
  };
  
  for (let i = 0; i < MIGRATION_STEPS.length; i++) {
    const step = MIGRATION_STEPS[i];
    const stepResult = {
      name: step.name,
      script: step.script,
      status: 'pending',
      duration: 0,
    };
    
    const startTime = Date.now();
    
    try {
      const success = runStep(step, i, MIGRATION_STEPS.length);
      stepResult.status = success ? 'success' : 'skipped';
      stepResult.duration = Date.now() - startTime;
    } catch (error) {
      stepResult.status = 'failed';
      stepResult.error = error.message;
      stepResult.duration = Date.now() - startTime;
      
      results.errors.push({
        step: step.name,
        error: error.message,
      });
      
      results.success = false;
      
      console.log(`\n❌ Migration failed at step: ${step.name}`);
      console.log(`Error: ${error.message}\n`);
      
      break;
    }
    
    results.steps.push(stepResult);
  }
  
  results.completedAt = new Date().toISOString();
  
  // Save migration report
  const reportPath = path.join(__dirname, '../planning/migration-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  
  // Print final summary
  console.log('\n' + '═'.repeat(60));
  console.log('🎉 MIGRATION COMPLETE!');
  console.log('═'.repeat(60));
  console.log(`Status: ${results.success ? '✅ SUCCESS' : '❌ FAILED'}`);
  console.log(`Duration: ${MIGRATION_STEPS.reduce((acc, _, i) => 
    acc + (results.steps[i]?.duration || 0), 0) / 1000}s`);
  console.log(`Steps completed: ${results.steps.filter(s => s.status === 'success').length}/${MIGRATION_STEPS.length}`);
  
  if (results.errors.length > 0) {
    console.log('\nErrors:');
    results.errors.forEach((err, i) => {
      console.log(`  ${i + 1}. ${err.step}: ${err.error}`);
    });
  }
  
  console.log(`\nReport saved to: ${reportPath}`);
  console.log('═'.repeat(60) + '\n');
  
  if (!results.success) {
    process.exit(1);
  }
}

// Run migration
if (require.main === module) {
  runMigration().catch(error => {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  });
}

module.exports = { runMigration };
