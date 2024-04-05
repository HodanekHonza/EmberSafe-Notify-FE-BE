import { UserProfile } from "@clerk/clerk-react";
export default function UserProfilePage() {
  return (
    <UserProfile path="/dashboard/user-profile" routing="path" />
  )
}
