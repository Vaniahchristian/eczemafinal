"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Search,
  Filter,
  BookOpen,
  Download,
  ExternalLink,
  Clock,
  Star,
  BarChart,
  BookMarked,
  GraduationCap,
  Newspaper,
  Microscope,
  Stethoscope,
  Heart,
  Plus,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample resources data
const resources = [
  {
    id: "res-1001",
    title: "Eczema Treatment Guidelines 2023",
    type: "Clinical Guideline",
    source: "American Academy of Dermatology",
    date: "2023-01-15",
    description:
      "Comprehensive guidelines for the diagnosis and management of atopic dermatitis in adults and children.",
    tags: ["Eczema", "Treatment", "Guidelines"],
    isFavorite: true,
    url: "#",
  },
  {
    id: "res-1002",
    title: "Advances in Topical Therapies for Atopic Dermatitis",
    type: "Research Paper",
    source: "Journal of Dermatological Science",
    date: "2022-11-03",
    description:
      "Review of recent advances in topical treatments for atopic dermatitis, including new formulations and mechanisms of action.",
    tags: ["Eczema", "Topical Therapy", "Research"],
    isFavorite: false,
    url: "#",
  },
  {
    id: "res-1003",
    title: "Patient Education: Managing Eczema Flare-ups",
    type: "Educational Material",
    source: "EczemaAI Resources",
    date: "2023-03-22",
    description:
      "Educational materials for patients on recognizing and managing eczema flare-ups, including lifestyle modifications and treatment adherence.",
    tags: ["Eczema", "Patient Education", "Flare-ups"],
    isFavorite: true,
    url: "#",
  },
  {
    id: "res-1004",
    title: "Immunological Mechanisms in Atopic Dermatitis",
    type: "Research Paper",
    source: "Nature Immunology",
    date: "2022-08-17",
    description:
      "In-depth analysis of the immunological pathways involved in atopic dermatitis and potential targets for novel therapies.",
    tags: ["Eczema", "Immunology", "Research"],
    isFavorite: false,
    url: "#",
  },
  {
    id: "res-1005",
    title: "Biologic Therapies for Severe Atopic Dermatitis",
    type: "Clinical Review",
    source: "New England Journal of Medicine",
    date: "2023-02-05",
    description:
      "Comprehensive review of biologic therapies for severe atopic dermatitis, including efficacy, safety, and patient selection criteria.",
    tags: ["Eczema", "Biologics", "Severe Cases"],
    isFavorite: true,
    url: "#",
  },
  {
    id: "res-1006",
    title: "Pediatric Eczema: Special Considerations",
    type: "Clinical Guideline",
    source: "American Academy of Pediatrics",
    date: "2022-12-10",
    description:
      "Guidelines for the management of atopic dermatitis in pediatric patients, including age-specific considerations and treatment approaches.",
    tags: ["Eczema", "Pediatric", "Guidelines"],
    isFavorite: false,
    url: "#",
  },
  {
    id: "res-1007",
    title: "Environmental Triggers of Atopic Dermatitis",
    type: "Research Paper",
    source: "Journal of Allergy and Clinical Immunology",
    date: "2023-04-18",
    description:
      "Investigation of environmental factors that trigger or exacerbate atopic dermatitis, including allergens, climate, and pollution.",
    tags: ["Eczema", "Environmental Factors", "Triggers"],
    isFavorite: false,
    url: "#",
  },
  {
    id: "res-1008",
    title: "Psychological Impact of Chronic Skin Conditions",
    type: "Clinical Review",
    source: "Journal of Psychosomatic Research",
    date: "2022-09-30",
    description:
      "Review of the psychological and quality-of-life impacts of chronic skin conditions, with a focus on atopic dermatitis.",
    tags: ["Eczema", "Psychology", "Quality of Life"],
    isFavorite: false,
    url: "#",
  },
]

// Sample recent resources
const recentResources = [
  {
    id: "recent-1",
    title: "Dupilumab Efficacy in Moderate-to-Severe Atopic Dermatitis",
    type: "Research Paper",
    date: "2023-06-05",
    source: "Journal of Investigative Dermatology",
  },
  {
    id: "recent-2",
    title: "Microbiome Alterations in Atopic Dermatitis",
    type: "Research Paper",
    date: "2023-06-02",
    source: "Science Translational Medicine",
  },
  {
    id: "recent-3",
    title: "Telemedicine for Dermatology Consultations",
    type: "Clinical Guideline",
    date: "2023-05-28",
    source: "American Telemedicine Association",
  },
]

// Sample popular resources
const popularResources = [
  {
    id: "popular-1",
    title: "Eczema Treatment Guidelines 2023",
    views: 1245,
    downloads: 876,
  },
  {
    id: "popular-2",
    title: "Patient Education: Managing Eczema Flare-ups",
    views: 982,
    downloads: 743,
  },
  {
    id: "popular-3",
    title: "Biologic Therapies for Severe Atopic Dermatitis",
    views: 865,
    downloads: 621,
  },
]

export default function MedicalResources() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [favorites, setFavorites] = useState(resources.filter((r) => r.isFavorite).map((r) => r.id))

  // Filter resources based on search term and active tab
  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    if (activeTab === "all") return matchesSearch
    if (activeTab === "guidelines") return matchesSearch && resource.type === "Clinical Guideline"
    if (activeTab === "research") return matchesSearch && resource.type === "Research Paper"
    if (activeTab === "education") return matchesSearch && resource.type === "Educational Material"
    if (activeTab === "favorites") return matchesSearch && favorites.includes(resource.id)

    return matchesSearch
  })

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  return (
    <div className="container px-4 py-6 md:px-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/doctor">
            <Button variant="outline" size="sm" className="mb-2">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-indigo-800 dark:text-indigo-300">Medical Resources</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Access clinical guidelines, research papers, and educational materials
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Resource
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Resource Library</CardTitle>
            <CardDescription>Browse and search medical resources</CardDescription>
            <div className="flex flex-col md:flex-row justify-between mt-4 gap-4">
              <div className="relative w-full md:w-2/3">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500 dark:text-slate-400" />
                <Input
                  type="search"
                  placeholder="Search resources..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="sm" className="w-full md:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="mb-6" onValueChange={setActiveTab}>
              <TabsList className="w-full">
                <TabsTrigger value="all" className="flex-1">
                  All Resources
                </TabsTrigger>
                <TabsTrigger value="guidelines" className="flex-1">
                  Guidelines
                </TabsTrigger>
                <TabsTrigger value="research" className="flex-1">
                  Research
                </TabsTrigger>
                <TabsTrigger value="education" className="flex-1">
                  Education
                </TabsTrigger>
                <TabsTrigger value="favorites" className="flex-1">
                  Favorites
                  <Badge className="ml-2">{favorites.length}</Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {filteredResources.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <BookOpen className="h-16 w-16 text-slate-300 dark:text-slate-600 mb-4" />
                <h3 className="text-xl font-medium mb-2">No resources found</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-md">
                  {searchTerm
                    ? "Try a different search term or filter"
                    : activeTab === "favorites"
                      ? "You haven't added any resources to your favorites yet"
                      : "No resources available in this category"}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredResources.map((resource) => (
                  <Card key={resource.id} className="overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="p-4 md:p-6 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <Badge
                              className="mb-2"
                              variant={
                                resource.type === "Clinical Guideline"
                                  ? "default"
                                  : resource.type === "Research Paper"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {resource.type}
                            </Badge>
                            <h3 className="text-lg font-medium mb-1">{resource.title}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                              {resource.source} • {new Date(resource.date).toLocaleDateString()}
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleFavorite(resource.id)}
                            className="text-slate-400 hover:text-indigo-500 dark:text-slate-500 dark:hover:text-indigo-400"
                          >
                            <Star
                              className={`h-5 w-5 ${favorites.includes(resource.id) ? "fill-indigo-500 text-indigo-500 dark:fill-indigo-400 dark:text-indigo-400" : ""}`}
                            />
                          </Button>
                        </div>
                        <p className="text-sm mb-3">{resource.description}</p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {resource.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                          <Button size="sm">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Showing {filteredResources.length} of {resources.length} resources
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recently Added</CardTitle>
              <CardDescription>Latest medical resources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentResources.map((resource) => (
                  <div key={resource.id} className="flex items-start">
                    <div className="mr-3 mt-0.5">
                      <Clock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <Link href="#" className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400">
                        {resource.title}
                      </Link>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {resource.type} • {resource.source}
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        {new Date(resource.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                View All Recent Resources
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Resources</CardTitle>
              <CardDescription>Most viewed and downloaded</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularResources.map((resource, index) => (
                  <div key={resource.id} className="flex items-start">
                    <div className="mr-3 flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 font-medium text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <Link href="#" className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400">
                        {resource.title}
                      </Link>
                      <div className="flex text-xs text-slate-500 dark:text-slate-400 mt-1">
                        <span className="flex items-center mr-3">
                          <BarChart className="h-3 w-3 mr-1" />
                          {resource.views} views
                        </span>
                        <span className="flex items-center">
                          <Download className="h-3 w-3 mr-1" />
                          {resource.downloads} downloads
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resource Categories</CardTitle>
              <CardDescription>Browse by category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="justify-start h-auto py-3">
                  <BookMarked className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                  <div className="text-left">
                    <div className="font-medium">Guidelines</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Clinical standards</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-3">
                  <Microscope className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                  <div className="text-left">
                    <div className="font-medium">Research</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Latest studies</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-3">
                  <GraduationCap className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                  <div className="text-left">
                    <div className="font-medium">Education</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Patient materials</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-3">
                  <Newspaper className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                  <div className="text-left">
                    <div className="font-medium">News</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Latest updates</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-3">
                  <Stethoscope className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                  <div className="text-left">
                    <div className="font-medium">Clinical</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Practice tools</div>
                  </div>
                </Button>
                <Button variant="outline" className="justify-start h-auto py-3">
                  <Heart className="h-4 w-4 mr-2 text-indigo-600 dark:text-indigo-400" />
                  <div className="text-left">
                    <div className="font-medium">Wellness</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Holistic care</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

