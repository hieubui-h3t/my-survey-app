"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Sidebar from "@/components/sidebar";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 mt-16 md:mt-0">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold">Good Morning, Eric P Baron</h1>
        </div>
        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Request</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">150</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Approved Request</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">33</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reject Request</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">4</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Speaker</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">16</div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Event & Program Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Upcoming Event</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-2">You have 4 events this month</div>
              <div className="mb-2">
                <div className="font-semibold">Tomorrow</div>
                <div>Live Meeting - Clinic</div>
                <div className="text-xs text-gray-500">Event Name • AM • Location</div>
              </div>
              {/* Add more events as needed */}
            </CardContent>
          </Card>
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Program Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={[
                  { name: 'Jan', value: 24 },
                  { name: 'Feb', value: 16 },
                  { name: 'Mar', value: 20 },
                  { name: 'Apr', value: 32 },
                  { name: 'May', value: 12 },
                  { name: 'Jun', value: 28 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#0D9488" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Request List */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Request List</CardTitle>
            <Button 
              className="bg-teal-600 hover:bg-teal-700 text-white"
              onClick={() => router.push('/program-data')}
            >
              Create Program
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Link</TableHead>
                  <TableHead>Event Date</TableHead>
                  <TableHead>Speaker</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Topic</TableHead>
                  <TableHead>Venue</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <a href="#" className="text-blue-600 underline">E818-9012</a>
                  </TableCell>
                  <TableCell>Monday, April 21, 2025</TableCell>
                  <TableCell>Eric P Baron</TableCell>
                  <TableCell>
                    <Badge variant="default">Approve</Badge>
                  </TableCell>
                  <TableCell>Treatment Strategies with VYEPTI...</TableCell>
                  <TableCell>Flemings Prime</TableCell>
                  <TableCell>...</TableCell>
                </TableRow>
                {/* Add more rows as needed */}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
