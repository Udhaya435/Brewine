import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

function CartDrawer({
  isOpen,
  onClose,
  cart = [],
  onUpdateQuantity,
  onRemoveItem,
}) {
  if (!isOpen) return null;

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[420px] bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden"
      >
        {/* Cart Header */}
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingBag className="text-[#e62e2d]" size={22} />
            <h2 className="text-lg font-bold text-gray-900">
              Your Cart ({cart.length})
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-600 cursor-pointer shrink-0"
            aria-label="Close Cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
              <ShoppingBag size={48} className="mb-3 opacity-30" />
              <p className="text-base font-medium text-gray-600">
                Your cart is empty
              </p>
              <p className="text-xs mt-1">Add products to see them here.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.id}-${item.colorLabel}`}
                className="flex gap-3 p-3 rounded-2xl border border-gray-200/80 bg-gray-50/50"
              >
                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="w-20 h-20 object-contain bg-white rounded-xl p-1.5 border border-gray-100 shrink-0"
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-bold text-gray-900 leading-snug truncate">
                        {item.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() =>
                          onRemoveItem(item.id, item.colorLabel)
                        }
                        className="text-gray-400 hover:text-red-600 p-1 transition cursor-pointer shrink-0"
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    {item.colorLabel && (
                      <p className="text-xs text-gray-500 mt-0.5">
                        Color: {item.colorLabel}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2 mt-3">
                    <span className="text-sm font-extrabold text-gray-900">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </span>

                    <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-2 py-1 shrink-0">
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(item.id, item.colorLabel, -1)
                        }
                        className="text-gray-600 hover:text-black cursor-pointer"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-xs font-bold min-w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          onUpdateQuantity(item.id, item.colorLabel, 1)
                        }
                        className="text-gray-600 hover:text-black cursor-pointer"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-gray-100 bg-white space-y-3 shrink-0">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 font-medium">Subtotal</span>
              <span className="text-lg font-black text-gray-900">
                ₹{totalAmount.toLocaleString("en-IN")}
              </span>
            </div>
            <button
              type="button"
              onClick={() => alert("Proceeding to Checkout!")}
              className="w-full py-3.5 rounded-xl bg-[#e62e2d] hover:bg-[#cc2221] text-white font-bold text-sm shadow-md transition cursor-pointer"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;