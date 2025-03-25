"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, ZoomIn, ZoomOut, Layers } from "lucide-react"

// Add this right after the imports but before the component definition
declare global {
  interface Window {
    L: any
  }
}

// Define types for our location data
type Location = {
  lat: number
  lng: number
  address: string
}

type TimelineEvent = {
  status: string
  date: string
  description: string
  location?: Location
}

type PackageMapProps = {
  currentLocation: Location
  timeline: TimelineEvent[]
  status: string
}

export default function PackageMap({ currentLocation, timeline, status }: PackageMapProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapType, setMapType] = useState("street") // street, satellite, terrain
  const leafletMapRef = useRef(null)

  // Filter timeline events that have location data
  const locationsFromTimeline = timeline
    .filter((event) => event.location)
    .map((event) => ({
      ...event.location,
      status: event.status,
      date: event.date,
    }))

  // Set map center
  const mapCenter = currentLocation ? [currentLocation.lat, currentLocation.lng] : [39.8283, -98.5795]

  // Function to center the map on the current location
  const centerOnCurrentLocation = () => {
    if (leafletMapRef.current) {
      leafletMapRef.current.setView([currentLocation.lat, currentLocation.lng], 10)
    }
  }

  // Function to zoom in
  const zoomIn = () => {
    if (leafletMapRef.current) {
      leafletMapRef.current.setZoom(leafletMapRef.current.getZoom() + 1)
    }
  }

  // Function to zoom out
  const zoomOut = () => {
    if (leafletMapRef.current) {
      leafletMapRef.current.setZoom(leafletMapRef.current.getZoom() - 1)
    }
  }

  // Function to change map type
  const changeMapType = (type) => {
    setMapType(type)

    if (leafletMapRef.current && mapLoaded && window.L) {
      const map = leafletMapRef.current
      const L = window.L

      // Remove current tile layer
      map.eachLayer((layer) => {
        if (layer._url) {
          map.removeLayer(layer)
        }
      })

      // Add new tile layer based on type
      let tileLayer
      switch (type) {
        case "satellite":
          tileLayer = L.tileLayer(
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            {
              attribution:
                "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
            },
          )
          break
        case "terrain":
          tileLayer = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
            attribution:
              'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
          })
          break
        default:
          tileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          })
      }

      tileLayer.addTo(map)
    }
  }

  useEffect(() => {
    setIsMounted(true)

    // Only load the map on the client side
    if (typeof window !== "undefined" && isMounted) {
      // Define a function to load and initialize the map
      const loadMap = async () => {
        try {
          // Dynamically import Leaflet
          const L = await import("leaflet")

          // Import Leaflet CSS
          const linkElement = document.createElement("link")
          linkElement.rel = "stylesheet"
          linkElement.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          linkElement.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          linkElement.crossOrigin = ""
          document.head.appendChild(linkElement)

          // Store L in global scope for the map type change function
          window.L = L

          // Create a map container element
          const mapContainer = document.getElementById("map-container")
          if (!mapContainer) return

          // Clear any existing map
          mapContainer.innerHTML = ""

          // Create a new div for the map
          const mapElement = document.createElement("div")
          mapElement.style.height = "100%"
          mapElement.id = "leaflet-map"
          mapContainer.appendChild(mapElement)

          // Create the map
          const map = L.map("leaflet-map").setView([mapCenter[0], mapCenter[1]], 5)
          leafletMapRef.current = map

          // Add the tile layer based on selected map type
          let tileLayer
          switch (mapType) {
            case "satellite":
              tileLayer = L.tileLayer(
                "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
                {
                  attribution:
                    "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
                },
              )
              break
            case "terrain":
              tileLayer = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
                attribution:
                  'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
              })
              break
            default:
              tileLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
              })
          }

          tileLayer.addTo(map)

          // Fix the icon paths issue
          delete L.Icon.Default.prototype._getIconUrl
          L.Icon.Default.mergeOptions({
            iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
            iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
            shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
          })

          // Create custom icons for different statuses
          const currentLocationIcon = L.divIcon({
            className: "custom-div-icon",
            html: `<div style="background-color:#0ea5e9; width:20px; height:20px; border-radius:50%; border:3px solid white; box-shadow:0 0 10px rgba(0,0,0,0.3);"></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10],
          })

          const pastLocationIcon = L.divIcon({
            className: "custom-div-icon",
            html: `<div style="background-color:#6b7280; width:14px; height:14px; border-radius:50%; border:2px solid white; box-shadow:0 0 5px rgba(0,0,0,0.2);"></div>`,
            iconSize: [14, 14],
            iconAnchor: [7, 7],
          })

          // Add current location marker with Beatrix styling
          const currentMarker = L.marker([currentLocation.lat, currentLocation.lng], {
            icon: currentLocationIcon,
            title: "Current Position",
            alt: "Current Position",
            riseOnHover: true,
          })
            .addTo(map)
            .bindPopup(`
              <div class="p-2">
                <h3 class="font-bold text-beatrix-primary">Current Location</h3>
                <p>${currentLocation.address}</p>
                <p class="text-sm font-mono mt-1">
                  LAT: ${currentLocation.lat.toFixed(4)} | LNG: ${currentLocation.lng.toFixed(4)}
                </p>
                <p class="text-sm mt-2">
                  Status: ${status.charAt(0).toUpperCase() + status.slice(1)}
                </p>
              </div>
            `)

          // Add timeline markers
          const polylinePoints = []
          polylinePoints.push([currentLocation.lat, currentLocation.lng])

          // Sort timeline events by date (oldest first)
          const sortedLocations = [...locationsFromTimeline].sort((a, b) => {
            return new Date(a.date).getTime() - new Date(b.date).getTime()
          })

          sortedLocations.forEach((location, index) => {
            if (location.lat !== currentLocation.lat && location.lng !== currentLocation.lng) {
              L.marker([location.lat, location.lng], {
                icon: pastLocationIcon,
                title: location.status,
                alt: location.status,
                riseOnHover: true,
              })
                .addTo(map)
                .bindPopup(`
                  <div class="p-2">
                    <h3 class="font-bold text-beatrix-primary">${location.status.charAt(0).toUpperCase() + location.status.slice(1)}</h3>
                    <p>${location.address}</p>
                    <p class="text-sm font-mono mt-1">
                      LAT: ${location.lat.toFixed(4)} | LNG: ${location.lng.toFixed(4)}
                    </p>
                    <p class="text-sm mt-2">
                      Date: ${location.date}
                    </p>
                  </div>
                `)

              polylinePoints.push([location.lat, location.lng])
            }
          })

          // Add polyline for the journey with Beatrix styling
          if (polylinePoints.length > 1) {
            // Create an animated polyline
            const pathPattern = {
              delay: 800,
              dashArray: [10, 20],
              weight: 3,
              color: "#0ea5e9",
              pulseColor: "#0369a1",
              opacity: 0.8,
            }

            // Create the polyline
            const polyline = L.polyline(polylinePoints, {
              color: pathPattern.color,
              weight: pathPattern.weight,
              opacity: pathPattern.opacity,
              dashArray: pathPattern.dashArray,
            }).addTo(map)

            // Add direction arrows
            const arrowHeads = L.polylineDecorator(polyline, {
              patterns: [
                {
                  offset: "5%",
                  repeat: "15%",
                  symbol: L.Symbol.arrowHead({
                    pixelSize: 12,
                    polygon: false,
                    pathOptions: {
                      stroke: true,
                      color: pathPattern.color,
                      weight: 3,
                    },
                  }),
                },
              ],
            }).addTo(map)
          }

          // Add distance scale
          L.control
            .scale({
              imperial: true,
              metric: true,
              position: "bottomleft",
            })
            .addTo(map)

          // Fit bounds to show all markers
          if (polylinePoints.length > 1) {
            map.fitBounds(polylinePoints, {
              padding: [50, 50],
            })
          }

          setMapLoaded(true)
        } catch (error) {
          console.error("Error loading map:", error)
        }
      }

      loadMap()
    }

    // Cleanup function
    return () => {
      if (typeof window !== "undefined") {
        const mapElement = document.getElementById("leaflet-map")
        if (mapElement) {
          mapElement.innerHTML = ""
        }
        // Clean up global L reference
        window.L = null

        // Remove the dynamically added CSS
        const leafletCSS = document.querySelector('link[href*="leaflet.css"]')
        if (leafletCSS) {
          document.head.removeChild(leafletCSS)
        }
      }
    }
  }, [isMounted, currentLocation, locationsFromTimeline, mapCenter, status, mapType])

  return (
    <Card className="border border-gray-200 shadow-md overflow-hidden">
      <CardHeader className="bg-beatrix-primary text-white py-3 px-4">
        <CardTitle className="flex items-center text-lg">
          <MapPin className="h-5 w-5 mr-2" />
          Package Location Tracker
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative">
          <div id="map-container" className="h-[500px] w-full overflow-hidden">
            {!mapLoaded && (
              <div className="h-full w-full bg-gray-100 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-beatrix-primary border-t-transparent"></div>
                  <p className="text-beatrix-dark">Loading map...</p>
                </div>
              </div>
            )}
          </div>

          {/* Map controls */}
          {mapLoaded && (
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <Button
                onClick={centerOnCurrentLocation}
                className="bg-white text-beatrix-primary hover:bg-beatrix-light shadow-md"
                size="sm"
                title="Center on current position"
              >
                <Navigation className="h-4 w-4" />
              </Button>
              <Button
                onClick={zoomIn}
                className="bg-white text-beatrix-primary hover:bg-beatrix-light shadow-md"
                size="sm"
                title="Zoom in"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button
                onClick={zoomOut}
                className="bg-white text-beatrix-primary hover:bg-beatrix-light shadow-md"
                size="sm"
                title="Zoom out"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <div className="relative">
                <Button
                  onClick={() => document.getElementById("map-type-dropdown").classList.toggle("hidden")}
                  className="bg-white text-beatrix-primary hover:bg-beatrix-light shadow-md"
                  size="sm"
                  title="Change map type"
                >
                  <Layers className="h-4 w-4" />
                </Button>
                <div
                  id="map-type-dropdown"
                  className="hidden absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                >
                  <div className="py-1">
                    <button
                      onClick={() => {
                        changeMapType("street")
                        document.getElementById("map-type-dropdown").classList.add("hidden")
                      }}
                      className={`block px-4 py-2 text-sm w-full text-left ${mapType === "street" ? "bg-beatrix-light text-beatrix-primary font-bold" : "hover:bg-gray-100"}`}
                    >
                      Street
                    </button>
                    <button
                      onClick={() => {
                        changeMapType("satellite")
                        document.getElementById("map-type-dropdown").classList.add("hidden")
                      }}
                      className={`block px-4 py-2 text-sm w-full text-left ${mapType === "satellite" ? "bg-beatrix-light text-beatrix-primary font-bold" : "hover:bg-gray-100"}`}
                    >
                      Satellite
                    </button>
                    <button
                      onClick={() => {
                        changeMapType("terrain")
                        document.getElementById("map-type-dropdown").classList.add("hidden")
                      }}
                      className={`block px-4 py-2 text-sm w-full text-left ${mapType === "terrain" ? "bg-beatrix-light text-beatrix-primary font-bold" : "hover:bg-gray-100"}`}
                    >
                      Terrain
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <p className="text-sm">
                <span className="font-semibold text-beatrix-dark">Current Location:</span> {currentLocation.address}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Coordinates: {currentLocation.lat.toFixed(6)}, {currentLocation.lng.toFixed(6)}
              </p>
            </div>
            <div className="mt-2 md:mt-0">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  status === "delivered"
                    ? "bg-green-100 text-green-800"
                    : status === "shipped"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

