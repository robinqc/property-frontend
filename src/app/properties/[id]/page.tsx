import { getPropertyById } from "@/api/properties"
import { ImageCarousel } from "@/components/image-carousel"
import DetailsContainer from "@/components/property-details/details-container"
import PropertyHeader from "@/components/property-header"
import { PropertyMap } from "@/components/property-map"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DatePicker } from "@/components/ui/date-picker"
import { MapPin } from "lucide-react"

interface Props {
    params?: Promise<{
        id?: string;
    }>
}


export default async function PropertyDetailsPage(props: Props) {
  const params = await props.params;
  const property = await getPropertyById(params?.id || '');

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <PropertyHeader />
      <div className="container mx-auto px-10 ">
        {/* Property Images */}
        <div className="mb-8">
          <ImageCarousel images={property?.images || []} title={property?.name || ''} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-headings:font-[Cinzel]">
              <h1 className="text-3xl font-bold text-foreground mb-2">{property?.name}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{property?.address}</span>
                </div>
              </div>
            </div>
            <DetailsContainer property={property!} />
            <div>
              <h2 className="text-xl font-semibold mb-4">About this place</h2>
              <p className="text-muted-foreground leading-relaxed">{property?.overview}</p>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Where it's located</h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{property?.city}</span>
                </div>
                <PropertyMap
                  latitude={25.761667}
                  longitude={-80.144167}
                  title={property?.name || ''}
                />
              </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-none shadow-none">
              <CardContent className="">
                <div className="mb-4">
                  <div className="font-[Cinzel] text-2xl font-bold">
                    <span className="text-3xl text-foreground">$ {property?.price?.toLocaleString()}</span> 
                  </div>
                  
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-foreground pt-5">TOUR THE PROPERTY</h2>
                  <div className="flex w-full">
                      <DatePicker className="h-15 py-2" />
                  </div>

                  <Button className="w-full h-15 rounded-sm hover:bg-white hover:text-foreground hover:border-2 hover:border-black">Schedule a visit</Button>

                  <p className="text-center text-sm text-muted-foreground">You will be contacted by our sales team</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
