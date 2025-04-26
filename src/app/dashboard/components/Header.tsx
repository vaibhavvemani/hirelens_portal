import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar1, ClipboardMinus } from "lucide-react"

const Header = () => {
  return (
    <div className='flex justify-between pt-4'>
        <div className='flex flex-col'>
            <h1 className="text-2xl font-extrabold">Dashboard</h1>
            <p className="font-medium text-accent-foreground">Welcome back, User! Here's an overview of your learning progress!</p>
        </div>
        <div className="flex justify-center items-center gap-5">
            <Card className="flex items-center w-fit p-3">
                <div className="flex gap-2">
                <Calendar1 size={15} className="translate-y-[-1px]"/>
                <p className="text-sm font-bold leading-none">
                    {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                </div>
            </Card>

            <Card className="flex items-center w-fit p-3 bg-black text-background">
                <div className="flex gap-2">
                <ClipboardMinus size={15} className="translate-y-[-1px]"/>
                <p className="text-sm font-bold leading-none">
                    View Reports
                </p>
                </div>
            </Card>
        </div>
    </div>
  )
}

export default Header