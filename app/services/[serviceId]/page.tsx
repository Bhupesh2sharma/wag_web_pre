import ServiceDetail from "@/components/ServiceDetail"

export default function ServiceDetailPage({ params }: { params: { serviceId: string } }) {
  return <ServiceDetail serviceId={params.serviceId} />
}