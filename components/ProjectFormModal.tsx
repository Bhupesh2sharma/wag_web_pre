"use client"

import { useState } from 'react';

export default function ProjectFormModal({ 
  onClose,
  onSubmit 
}: { 
  onClose: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h3 className="text-2xl font-bold mb-4">Tell us about your project</h3>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
            <textarea name="description" rows={4} className="w-full border rounded-lg p-2" required></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Budget</label>
            <select name="budget" className="w-full border rounded-lg p-2" required>
              <option value="">Select budget range</option>
              <option value="0-50000">₹0 - ₹50,000</option>
              <option value="50000-200000">₹50,000 - ₹2,00,000</option>
              <option value="200000-500000">₹2,00,000 - ₹5,00,000</option>
              <option value="500000+">₹5,00,000+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
            <input type="email" name="email" className="w-full border rounded-lg p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" name="phone" className="w-full border rounded-lg p-2" required />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
            Submit Project Details
          </button>
        </form>
      </div>
    </div>
  );
}