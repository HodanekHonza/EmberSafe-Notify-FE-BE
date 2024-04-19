import { UserProfile } from "@clerk/clerk-react";
export default function UserProfilePage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <UserProfile path="/dashboard/user-profile" routing="path" />
    </div>
  )
}
