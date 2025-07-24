export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-600">
        <p>&copy; {new Date().getFullYear()} Syed Toheed Mehdi. All rights reserved.</p>
      </div>
    </footer>
  );
}