export default function Footer() {
    return (
        <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-6 text-center text-zinc-500 dark:text-zinc-400 text-sm">
                <p>© {new Date().getFullYear()} Muhammad Tufail. All rights reserved.</p>
            </div>
        </footer>
    );
}
