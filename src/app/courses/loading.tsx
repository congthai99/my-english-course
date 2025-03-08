import Loading from "@/components/Loading";
import MainLayout from "@/layouts/MainLayout";

export default function LoadingCourses() {
  return (
    <MainLayout>
      <div className="h-[1000px]">
        <Loading />
      </div>
    </MainLayout>
  );
}
