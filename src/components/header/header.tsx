import { useAuth } from "@/context/AuthContext";
import { Button } from "../ui/button";

function Header() {
    const { logout } = useAuth();
    return (
        <header className="fixed top-0 left-0 w-full flex justify-end px-4 sm:px-8 py-4 h-16 bg-white shadow z-50">
            <Button data-cy="logout" onClick={logout} className="bg-[#002855] hover:bg-[#001d40] text-white font-bold w-full sm:w-60 rounded-sm">
                Logout
            </Button>
        </header>
    );
}

export default Header;
