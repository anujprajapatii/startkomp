import Container from "@/components/ui/Container";
import CategoryBarClient from "./CategoryBarClient";

const categories = [
  "All","SaaS","AI Tools","Fintech","Analytics",
  "Developer Tools","E-Commerce","EdTech","HealthTech",
  "Workflow Automation","Productivity","Legal","Personal Finance",
];

export default function CategoryBar() {
  return (
    <div className="w-full border-b border-[#1a2d4a] bg-[#0b1829]/85 backdrop-blur-sm sticky top-[64px] z-30">
      <Container className="py-[10px]">
        <CategoryBarClient categories={categories}/>
      </Container>
    </div>
  );
}
