import { PhotoCard } from "./page"


function AnalyticsPage() {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Analytics</h2>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PhotoCard
            src="/next.svg?height=600&width=800"
            alt="Monthly Performance"
            info={{
              title: "Monthly Performance Report",
              description: "Detailed analysis of your performance metrics for the current month",
              details: [
                { title: "Revenue Growth", content: "Your revenue has increased by 24% compared to last month." },
                {
                  title: "User Engagement",
                  content: "Daily active users have grown by 12% with an average session time of 15 minutes.",
                },
                {
                  title: "Conversion Rate",
                  content: "Your conversion rate is at 3.8%, which is 0.5% higher than industry average.",
                },
              ],
            }}
          />
          <PhotoCard
            src="/placeholder.svg?height=600&width=800"
            alt="User Demographics"
            info={{
              title: "User Demographics Analysis",
              description: "Breakdown of your user base by various demographic factors",
              details: [
                { title: "Age Distribution", content: "Majority of your users (65%) are between 25-34 years old." },
                {
                  title: "Geographic Reach",
                  content: "Your platform has users from 42 countries, with the highest concentration in North America.",
                },
                {
                  title: "Device Usage",
                  content: "78% of users access your platform via mobile devices, primarily iOS (52%).",
                },
              ],
            }}
          />
        </div>
      </div>
    )
  }