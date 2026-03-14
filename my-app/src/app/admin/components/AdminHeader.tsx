'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  Menu,
  LogOut,
  User
} from 'lucide-react'

interface AdminHeaderProps {
  user: {
    name?: string | null
    email?: string | null
    image?: string | null
    role?: string
  }
}

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Artykuły', href: '/admin/articles', icon: FileText },
  { name: 'Media', href: '/admin/media', icon: Image },
  { name: 'Nawigacja', href: '/admin/navigation', icon: Menu },
]

export function AdminHeader({ user }: AdminHeaderProps) {
  const pathname = usePathname()

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-900">WBS CMS</span>
            </Link>
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">{user.name || user.email}</span>
              {user.role && (
                <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full uppercase">
                  {user.role}
                </span>
              )}
            </div>
            <button
              onClick={() => signOut({ callbackUrl: '/admin/login' })}
              className="flex items-center gap-1 text-sm text-red-600 hover:text-red-800 px-3 py-2 rounded-md hover:bg-red-50 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span className="hidden sm:inline">Wyloguj</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <nav className="md:hidden border-t border-gray-200 overflow-x-auto">
        <div className="flex space-x-1 px-4 py-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.name}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
