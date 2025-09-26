import Header from "@/components/header/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";

export default function ProfilePage() {
    const { user } = useAuth();
    return (
        <div className="min-h-screen bg-slate-100 flex justify-center items-center flex-col">
            <Header />
            <main className="flex justify-center items-center">
                <Card data-cy="dashboard-card" className="w-[400px] shadow-md px-2 py-10">
                    <CardHeader className="flex flex-col items-center">
                        <CardTitle className="text-sm text-muted-foreground">
                            Profile picture
                        </CardTitle>
                        <Avatar>
                            <AvatarImage data-cy='user-avatar' src={user?.avatar.low ?? ''} />
                            <AvatarFallback>BC</AvatarFallback>
                        </Avatar>
                    </CardHeader>

                    <CardContent className="space-y-4 mt-5">
                        <div>
                            <p className="text-md font-medium">
                                Your <span className="font-bold">Name</span>
                            </p>
                            <Input data-cy="user-name" value={user?.name ?? ''} disabled />
                        </div>

                        <div>
                            <p className="text-md font-medium">
                                Your <span className="font-bold">E-mail</span>
                            </p>
                            <Input data-cy="user-email" value={user?.email ?? ''} disabled />
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
