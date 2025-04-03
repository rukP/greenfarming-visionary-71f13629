
const BusinessHours = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-sarura-500">Business Hours</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Monday - Friday</span>
          <span className="font-medium">8:00 AM - 5:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Saturday</span>
          <span className="font-medium">9:00 AM - 1:00 PM</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Sunday</span>
          <span className="font-medium">Closed</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessHours;
