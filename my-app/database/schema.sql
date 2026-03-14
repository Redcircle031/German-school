-- WBS CMS Database Schema - PostgreSQL
-- Run this to create all tables for the custom CMS

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role VARCHAR(20) DEFAULT 'editor' CHECK (role IN ('admin', 'editor', 'contributor')),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Categories
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    name_pl VARCHAR(100) NOT NULL,
    name_de VARCHAR(100) NOT NULL,
    name_en VARCHAR(100) NOT NULL,
    color VARCHAR(7),
    sort_order INTEGER DEFAULT 0
);

-- Media (images, PDFs)
CREATE TABLE media (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    filename VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    file_size INTEGER NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    alt_text_pl VARCHAR(255),
    type VARCHAR(20) DEFAULT 'image',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Articles
CREATE TABLE articles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(200) UNIQUE NOT NULL,
    title_pl VARCHAR(255) NOT NULL,
    title_de VARCHAR(255),
    title_en VARCHAR(255),
    excerpt_pl TEXT,
    content_pl TEXT NOT NULL,
    category_id UUID REFERENCES categories(id),
    status VARCHAR(20) DEFAULT 'draft',
    published_at TIMESTAMP,
    is_featured BOOLEAN DEFAULT false,
    view_count INTEGER DEFAULT 0,
    old_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Article-Media junction
CREATE TABLE article_media (
    article_id UUID REFERENCES articles(id) ON DELETE CASCADE,
    media_id UUID REFERENCES media(id) ON DELETE CASCADE,
    sort_order INTEGER DEFAULT 0,
    PRIMARY KEY (article_id, media_id)
);

-- Navigation
CREATE TABLE navigation (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    label_pl VARCHAR(100) NOT NULL,
    url VARCHAR(500) NOT NULL,
    position VARCHAR(20),
    sort_order INTEGER DEFAULT 0
);

-- Settings
CREATE TABLE settings (
    key VARCHAR(100) PRIMARY KEY,
    value TEXT,
    type VARCHAR(20)
);

-- Insert default categories
INSERT INTO categories (slug, name_pl, name_de, name_en, color) VALUES
('aktualnosci', 'Aktualności', 'Aktuelles', 'News', '#3B82F6'),
('wydarzenia', 'Wydarzenia', 'Veranstaltungen', 'Events', '#8B5CF6'),
('sukcesy', 'Sukcesy', 'Erfolge', 'Achievements', '#F59E0B'),
('ogloszenia', 'Ogłoszenia', 'Mitteilungen', 'Announcements', '#10B981');

-- Create admin user (password: admin123 - change in production!)
INSERT INTO users (email, password_hash, first_name, last_name, role) VALUES
('admin@wbs.pl', '$2b$10$YourHashedPasswordHere', 'Admin', 'WBS', 'admin');
