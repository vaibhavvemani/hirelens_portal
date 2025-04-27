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
import Assignments from "./TabsContent/Assignments"
import Performance from "./TabsContent/Performance"

const Stats = ()=>{
  return (
    <Tabs defaultValue="Overview" className="w-full">
      <TabsList className="flex gap-4">
        <TabsTrigger value="Overview" className="cursor-pointer">Overview</TabsTrigger>
        <TabsTrigger value="Courses" className="cursor-pointer">Courses</TabsTrigger>
        <TabsTrigger value="Assignments" className="cursor-pointer">Assignments</TabsTrigger>
        <TabsTrigger value="Performance" className="cursor-pointer">Performance</TabsTrigger>
      </TabsList>
      <TabsContent value="Overview">
        <Overview />
      </TabsContent>
      <TabsContent value="Courses">
        <Courses />
      </TabsContent>
      <TabsContent value="Assignments">
        <Assignments />
      </TabsContent>
      <TabsContent value="Performance">
        <Performance />
      </TabsContent>
    </Tabs>
  )
}

export default Stats;