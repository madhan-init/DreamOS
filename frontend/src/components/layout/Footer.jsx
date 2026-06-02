export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t-[4px] border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">DreamVault</h2>
            <p className="text-gray-400 font-medium italic">Made for dreamers.</p>
          </div>

          <div className="flex gap-6 font-bold uppercase text-sm">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>
          
        </div>
        
        <div className="border-t-[2px] border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} DreamVault. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
