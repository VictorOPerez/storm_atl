"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Polygon, useMap, ZoomControl } from "react-leaflet";
import type { LatLngTuple, LatLngExpression } from "leaflet";
import { useEffect } from "react";

/** Cobertura aprox. siguiendo el I-285 (puedes retocar puntos finos) */
const ATLANTA_RING: LatLngTuple[] = [
    // NW → N → NE → E → SE → S → SW → W → NW
    [33.905, -84.520], // NW (Smyrna)
    [33.925, -84.470], // NNW
    [33.930, -84.410], // N (Sandy Springs)
    [33.915, -84.340], // NNE (Dunwoody)
    [33.885, -84.285], // NE (Doraville/Chamblee)
    [33.845, -84.250], // ENE (Tucker)
    [33.800, -84.235], // E (Decatur)
    [33.740, -84.260], // ESE
    [33.700, -84.300], // SE (East Atlanta)
    [33.660, -84.350], // SSE (East Point)
    [33.640, -84.400], // S (Airport)
    [33.655, -84.470], // SSW
    [33.690, -84.530], // SW
    [33.740, -84.565], // WSW
    [33.800, -84.575], // W
    [33.860, -84.555], // WNW
];

function FitToPolygon({ coords }: { coords: LatLngExpression[] }) {
    const map = useMap();
    useEffect(() => {
        map.fitBounds(coords as LatLngTuple[], { padding: [28, 28] });
    }, [coords, map]);
    return null;
}

export default function CoverageMapInner() {
    return (
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <MapContainer
                style={{
                    width: "100%",
                    height: "min(60vh, 560px)",
                    filter: "contrast(1.1) saturate(1.05)", // resalta vías
                }}
                center={[33.749, -84.388]}
                zoom={11}
                scrollWheelZoom={false}
                doubleClickZoom
                dragging
                className="bg-white"
            >
                {/* Mapa BLANCO: CartoDB Positron */}
                <TileLayer
                    attribution='&copy; OpenStreetMap &copy; Carto'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                {/* Fallback OSM estándar (por si el CDN bloquea) */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    opacity={0.0} // queda debajo invisible; súbelo si el de arriba no carga
                />

                <Polygon
                    positions={ATLANTA_RING}
                    pathOptions={{
                        color: "#00C2FF",     // borde azul
                        weight: 4,
                        opacity: 0.95,
                        fillColor: "#8E2DE2", // relleno morado
                        fillOpacity: 0.26,
                    }}
                />
                <FitToPolygon coords={ATLANTA_RING} />
            </MapContainer>

            <div className="pointer-events-none absolute inset-x-0 top-3 flex justify-center">
                <span className="rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-slate-900 backdrop-blur">
                    Atlanta (zona de cobertura)
                </span>
            </div>
        </div>
    );
}
