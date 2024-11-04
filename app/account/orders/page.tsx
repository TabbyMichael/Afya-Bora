export default function OrdersPage() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">My Orders</h2>
      <div className="space-y-4">
        {/* Order list will go here */}
        <div className="text-gray-500 text-center py-8">
          No orders found
        </div>
      </div>
    </div>
  );
} 