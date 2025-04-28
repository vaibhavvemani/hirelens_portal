import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Overview from "./TabsContent/Overview"
import Courses from "./TabsContent/Courses"
import Performance from "./TabsContent/Performance"
import Assessments from "./TabsContent/Assessments"

const Stats = ()=>{
  return (
    <Tabs defaultValue="Overview" className="w-full">
      <TabsList className="flex gap-4">
        <TabsTrigger value="Overview" className="cursor-pointer">Overview</TabsTrigger>
        <TabsTrigger value="Courses" className="cursor-pointer">Courses</TabsTrigger>
        <TabsTrigger value="Assessments" className="cursor-pointer">Assessments</TabsTrigger>
        <TabsTrigger value="Performance" className="cursor-pointer">Performance</TabsTrigger>
      </TabsList>
      <TabsContent value="Overview">
        <Overview />
      </TabsContent>
      <TabsContent value="Courses">
        <Courses />
      </TabsContent>
      <TabsContent value="Assessments">
        <Assessments />
      </TabsContent>
      <TabsContent value="Performance">
        <Performance />
      </TabsContent>
    </Tabs>
  )
}

export default Stats;