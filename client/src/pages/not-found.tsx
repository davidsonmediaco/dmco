import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <Card className="w-[420px] bg-zinc-900 border-zinc-800">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-white">Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-zinc-400 mb-6">The page you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-black font-medium text-sm transition-colors duration-300"
          >
            Return Home
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
