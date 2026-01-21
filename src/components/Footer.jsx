import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Share2, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0f0f0f] text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/images/logo.png" alt="ZEVORA" className="h-12 w-auto" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">Defining the standards of leather glove manufacturing. Quality, durability, and craftsmanship in every stitch.</p>
                        <div className="flex gap-4">
                            {/* Social Media Links - using placeholders or generic structure */}
                            <a className="size-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-blue-600 transition-colors" href="#" aria-label="Share">
                                <Share2 className="w-5 h-5" />
                            </a>
                            <a className="size-10 rounded-full bg-gray-800/50 flex items-center justify-center hover:bg-blue-600 transition-colors" href="#" aria-label="Website">
                                <Globe className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-white">Quick Links</h5>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link className="hover:text-white transition-colors" to="/about-heritage">About Heritage</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="/catalog">Product Catalog</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="/quality-control">Quality Control</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="/sustainability">Sustainability</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="/manufacturing">Custom Manufacturing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-white">Support</h5>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link className="hover:text-white transition-colors" to="/technical-support">Technical Support</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="/wholesale-inquiry">Wholesale Inquiry</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link className="hover:text-white transition-colors" to="/terms-of-service">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold mb-6 text-white">Headquarters</h5>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                                <span>Paris Rd, Street No 2<br />Puran Nagar, Sialkot, Pakistan 51310</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                <span>leatherindustryzevora@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                <span>+92 300 6130802</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-500">© 2026 Zevora Industry. All rights reserved.</p>
                    <p className="text-xs text-gray-500">
                        Designed and Developed by <a href="https://sialkotaimasters.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">Sialkot Ai Masters</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
