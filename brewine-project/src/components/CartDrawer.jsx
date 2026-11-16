import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function CartDrawer({ isOpen, onClose, cart, onUpdateQty, onRemove }) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleWhatsAppCheckout = () => {
    const itemsText = cart
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.name} (x${item.qty}) - ₹${(
            item.price * item.qty
          ).toLocaleString("en-IN")}`
      )
      .join("%0A");

    const message = `Hello Brewine Team! I would like to place an order:%0A%0A${itemsText}%0A%0A*Total: ₹${subtotal.toLocaleString(
      "en-IN"
    )}*`;

    window.open(`https://wa.me/917868999000?text=${message}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
      <div className="w-full max-w-md bg-white h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-[#c82333]" />
            <h2 className="text-base font-bold text-gray-800">
              Your Cart ({cart.reduce((acc, i) => acc + i.qty, 0)})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
              <ShoppingBag size={48} className="text-gray-300 mb-3" />
              <p className="text-sm font-semibold">Your cart is empty</p>
              <p className="text-xs mt-1">
                Add espresso machines or grinders to get started!
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50/50"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover bg-white border border-gray-200 shrink-0"
                />

                <div className="flex-1">
                  <h4 className="text-xs font-bold text-gray-800 line-clamp-2">
                    {item.name}
                  </h4>
                  <p className="text-sm font-extrabold text-[#c82333] mt-1">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-gray-200 rounded-lg bg-white">
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty - 1)}
                        className="p-1 text-gray-600 hover:text-black cursor-pointer"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-2.5 text-xs font-bold">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.id, item.qty + 1)}
                        className="p-1 text-gray-600 hover:text-black cursor-pointer"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-gray-400 hover:text-red-600 p-1 cursor-pointer"
                      aria-label="Remove item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-gray-200 bg-gray-50 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 font-medium">
                Subtotal (Incl. GST)
              </span>
              <span className="text-lg font-extrabold text-gray-900">
                ₹{subtotal.toLocaleString("en-IN")}
              </span>
            </div>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition cursor-pointer"
            >
              <FaWhatsapp size={18} />
              <span>Order Now via WhatsApp</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;