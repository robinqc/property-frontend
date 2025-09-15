import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-gray-200">
      <div className=" px-4 sm:px-6 lg:px-8 py-12 container mx-auto">
        {/* Bottom section */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <span>© 2025 Robin Quintero.</span>
            <Link href="https://github.com/robinqc" className="hover:text-gray-900" target="_blank" rel="noopener noreferrer">
              Github
            </Link>
            <Link href="https://www.linkedin.com/in/robinquintero/" className="hover:text-gray-900" target="_blank" rel="noopener noreferrer">
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
