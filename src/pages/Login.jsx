"use client"

import { useState } from "react"
import { Bell, Mail, Phone } from "lucide-react"
import * as Avatar from "@radix-ui/react-avatar"

const profileData = {
  user: {
    name: "Karthik",
    avatar: "https://via.placeholder.com/40",
  },
  about: {
    title: "About Us",
    mainImage:
      "https://img.freepik.com/free-photo/handsome-young-indian-student-man-holding-notebooks-while-standing-street_231208-2773.jpg?ga=GA1.1.2124410383.1734072035&semt=ais_hybrid",
    description: [
      "We are a creative team of designers and developers dedicated to building seamless digital experiences. With expertise in website and mobile application development, we focus on crafting intuitive and visually stunning user interfaces that enhance engagement and functionality. Our approach revolves around understanding each client's unique needs, ensuring that every project not only aligns with their vision but also strengthens their digital presence. Using modern design tools like Figma and Adobe XD, we transform ideas into interactive and responsive designs that blend aesthetics with performance. Whether it's a dynamic mobile app or a sleek corporate website, we are committed to delivering innovative solutions that leave a lasting impact.",
      
    ],
  },
  contact: {
    title: "Contact us",
    email: "sudhakarthik2000@gmail.com",
    phone: "9999999999",
  },
}

 const Login = ()=> {
  const [activeTab, setActiveTab] = useState("about")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="max-w-2xl mx-auto min-h-screen bg-gray-50 pt-8">
      <div className="bg-purple-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
            <Avatar.Image src={profileData.user.avatar} alt={profileData.user.name} className="w-full h-full object-cover" />
            <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600">
              KA
            </Avatar.Fallback>
          </Avatar.Root>
          <div className="text-white font-medium">Hello, Welcome {profileData.user.name}</div>
        </div>
        <div className="flex items-center gap-4">
          <button className={`text-white ${activeTab === "about" ? "underline" : ""}`} onClick={() => setActiveTab("about")}>
            About
          </button>
          <button className={`text-white ${activeTab === "contact" ? "underline" : ""}`} onClick={() => setActiveTab("contact")}>
            Contact
          </button>
          <button className="text-white" aria-label="Notifications">
            <Bell className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="m-4 p-4 bg-white shadow rounded-lg">
        {activeTab === "about" ? (
          <>
            <h1 className="text-xl font-bold">{profileData.about.title}</h1>
            <div className="mt-4">
              <img src={profileData.about.mainImage} alt="Profile" className="w-full rounded-lg" />
            </div>
            <div className="mt-4 space-y-4 text-gray-600">
              {profileData.about.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-xl font-bold">{profileData.contact.title}</h1>
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-800" />
                <span>{profileData.contact.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-800" />
                <span>{profileData.contact.phone}</span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded min-h-[150px]"
                  required
                />
              </div>
              <button type="submit" className="w-full p-2 bg-purple-800 text-white rounded hover:bg-purple-900">
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
export default Login;