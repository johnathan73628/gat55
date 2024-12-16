import { Card, CardContent } from '@/components/ui/card';

export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          <Icon className="h-12 w-12 mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}