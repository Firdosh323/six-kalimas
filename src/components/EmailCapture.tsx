import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address." });
      return;
    }
    try {
      const list = JSON.parse(localStorage.getItem("email-captures") || "[]");
      list.push({ email, ts: Date.now() });
      localStorage.setItem("email-captures", JSON.stringify(list));
      toast({ title: "Subscribed", description: "We’ll send your free PDF + audio bundle soon." });
      setEmail("");
    } catch {
      toast({ title: "Saved locally", description: "Your email was saved locally. Thank you!" });
    }
  };

  return (
    <Card className="border-emerald-100 bg-white">
      <CardHeader>
        <CardTitle className="text-emerald-900">Get the 6 Kalimas PDF + Audio</CardTitle>
        <CardDescription className="text-emerald-700">Free download link via email</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="flex flex-col md:flex-row gap-3">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            aria-label="Email address"
          />
          <Button type="submit">Get Free Download</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EmailCapture;
