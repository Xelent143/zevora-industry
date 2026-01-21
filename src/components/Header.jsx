import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <img src="/images/logo.png" alt="Zevora Industry" className="h-10 w-auto" />
                </Link>
                <nav className="hidden lg:flex items-center gap-8">
                    <Link className="text-[#334155] text-sm font-semibold hover:text-primary transition-colors nav-link-underline" to="/">Home</Link>
                    <Link className="text-[#334155] text-sm font-semibold hover:text-primary transition-colors nav-link-underline" to="/about-heritage">About</Link>
                    <Link className="text-[#334155] text-sm font-semibold hover:text-primary transition-colors nav-link-underline" to="/catalog">Products</Link>
                    <Link className="text-[#334155] text-sm font-semibold hover:text-primary transition-colors nav-link-underline" to="/manufacturing">Manufacturing</Link>
                    <Link className="text-[#334155] text-sm font-semibold hover:text-primary transition-colors nav-link-underline" to="/technical-support">Contact</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link to="/wholesale-inquiry" className="bg-[#1e4ed8] hover:bg-blue-700 text-white px-6 py-2.5 rounded-md text-sm font-bold transition-all shadow-sm">
                        Request a Quote
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
