import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-gray-200">
      <div className=" px-4 sm:px-6 lg:px-8 py-12">
        {/* Bottom section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <span>© 2024 Robin Quintero.</span>
            <Link href="#" className="hover:text-gray-900">
              Github
            </Link>
            <Link href="#" className="hover:text-gray-900">
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
