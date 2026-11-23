// WhatsApp Utility for DriveConnect
// Configured for direct Client <-> Driver & Client <-> Dispatch WhatsApp messaging

export const WHATSAPP_CONFIG = {
  // Support & Dispatch Desk Phone Number (without + or spaces)
  dispatchNumber: "919876543210", // Example: +91 9876543210 (change to your real number)

  // Generate WhatsApp web/app link
  createWhatsAppLink: (phone, text) => {
    const cleanPhone = (phone || WHATSAPP_CONFIG.dispatchNumber).replace(/[^0-9]/g, "");
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  },

  // Pre-filled booking message template
  generateBookingMessage: ({
    serviceType = "Hourly",
    pickup = "City center",
    destination = "",
    hours = "4",
    date = "Today",
    time = "ASAP",
    carModel = "My car",
    transmission = "Automatic",
    selectedDriver = "Fastest match",
    clientName = "Customer",
    notes = "",
  }) => {
    let msg = `🚗 *NEW DRIVECONNECT BOOKING REQUEST*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `👤 *Client Name:* ${clientName}\n`;
    msg += `⏱️ *Service:* ${serviceType.toUpperCase()} Chauffeur\n`;
    if (serviceType === "hourly") {
      msg += `⏳ *Duration:* ${hours} Hours\n`;
    }
    msg += `📍 *Pickup Address:* ${pickup}\n`;
    if (destination) {
      msg += `🏁 *Destination:* ${destination}\n`;
    }
    msg += `📅 *Date & Time:* ${date} at ${time}\n`;
    msg += `🚘 *Vehicle:* ${carModel} (${transmission})\n`;
    msg += `⭐ *Preferred Driver:* ${selectedDriver}\n`;
    if (notes) {
      msg += `📝 *Notes:* ${notes}\n`;
    }
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Please confirm driver availability and arrival time! 🙏`;
    return msg;
  },

  // Pre-filled direct driver inquiry message
  generateDriverInquiryMessage: (driverName, driverRole) => {
    return (
      `👋 Hello ${driverName}! I saw your profile as a ${driverRole} on DriveConnect.\n\n` +
      `I am looking for a personal driver for my car. Are you available for a trip?`
    );
  },
};
