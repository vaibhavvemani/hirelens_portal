import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
  } from "@/components/ui/card";
  
  
  import { Button } from "@/components/ui/button";
  import Image from "next/image";
  

const recommendedResourcesData = [
    { src: "/default.png", alt: "JavaScript Book", title: "Advanced JavaScript Patterns", rating: "4.8 ★", type: "eBook" },
    { src: "/default.png", alt: "Algorithm Course", title: "Algorithm Visualization Tools", rating: "4.6 ★", type: "Interactive" },
    { src: "/default.png", alt: "Design Course", title: "Responsive Design Workshop", rating: "4.9 ★", type: "Video Course" },
  ];

  interface recommendedResourceProps{
    src: string,
    alt: string,
    title: string,
    rating: string,
    type: string
  }

  const RecommendedResourceItem = ({ src, alt, title, rating, type }: recommendedResourceProps) => (
    <div className="flex items-center gap-4">
      <Image
        src={src}
        width={40}
        height={40}
        alt={alt}
        className="rounded-md"
      />
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-xs text-muted-foreground">{type} • {rating}</p>
      </div>
    </div>
  );
  
  const Resources = () => {
    return (
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>Resources</CardTitle>
          <CardDescription>Recommended learning materials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            {recommendedResourcesData.map((resource, index) => (
              <RecommendedResourceItem
                key={index}
                src={resource.src}
                alt={resource.alt}
                title={resource.title}
                rating={resource.rating}
                type={resource.type}
              />
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full cursor-pointer">
            View All Resources
          </Button>
        </CardFooter>
      </Card>
    );
  };

  export default Resources;