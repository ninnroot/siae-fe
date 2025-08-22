"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import HeroSection from "./hero-section";
import MerchandiseItems from "./merchandise-items";

export default function MerchandisePage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [itemSize, setItemSize] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const itemSizes = ["XS", "S", "M", "L", "XL"];
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: "AISE Anniversary T-shirt",
    price: "$30",
    image: "/merchandise-items/item.jpg",
  }));

  const handleAddToCart = (product: any) => {
    setSelectedProduct(product);
    setShowOrderModal(true);
  };

  const handleViewImage = (product: any) => {
    setSelectedProduct(product);
    setShowImageModal(true);
  };

  const handleProceed = () => {
    setShowOrderModal(false);
    setShowSuccessAlert(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Merchandise Items */}
      <MerchandiseItems
        products={products}
        handleAddToCart={handleAddToCart}
        handleViewImage={handleViewImage}
      />

      {/* Image Modal */}
      <Dialog open={showImageModal} onOpenChange={setShowImageModal}>
        <DialogContent className="max-w-4xl max-h-[90vh]">
          <DialogHeader>
            <DialogTitle>{selectedProduct?.name}</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center">
            <img
              src={selectedProduct?.image || "/placeholder.svg"}
              alt={selectedProduct?.name}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Order Modal */}
      <Dialog open={showOrderModal} onOpenChange={setShowOrderModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Delivery Informations</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <label className="block text-sm font-medium my-2">
              Choose Item Size
            </label>
            <div className="flex gap-3">
              {itemSizes.map((size, index) => (
                <div
                  onClick={() => setItemSize(index)}
                  className={`border rounded-xl px-5 py-4 cursor-pointer ${
                    itemSize === index
                      ? " border-orange-400"
                      : "border-gray-300"
                  }`}
                  key={index}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Phone Number
              </label>
              <Input
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Delivery Address
              </label>
              <Textarea
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                placeholder="Enter your delivery address"
                rows={3}
              />
            </div>
            <Button
              onClick={handleProceed}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white"
            >
              Proceed to payment
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Alert */}
      <AlertDialog open={showSuccessAlert} onOpenChange={setShowSuccessAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">Order Successful!</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              We’ve received your order and sent a confirmation email to
              <b className="underline text-blue-900"> { formData.email || "example@gmail.com"}</b>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter >
            <AlertDialogAction className="mx-auto  bg-blue-900 hover:bg-blue-800 text-white" onClick={() => setShowSuccessAlert(false)}>
              Continue Shopping
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
