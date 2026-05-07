import { Radio } from "@mui/material";
import React from "react";

const AddressCard = ({ value, selectedValue, handleChange }) => {
  const isSelected = value == selectedValue;

  return (
    <div
      className={`p-5 rounded-xl flex gap-4 cursor-pointer transition-all duration-300 
      ${
        isSelected
          ? "border-2 bg-gray-200 shadow"
          : "border hover:shadow-sm hover:border-gray-800"
      }`}
      onClick={() => handleChange({ target: { value } })}
    >
      {/* Radio */}
      <div className="flex items-start pt-1">
        <Radio
          checked={isSelected}
          onChange={handleChange}
          value={value}
          name="radio-buttons"
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-[15px] text-gray-800">
            Nguyễn Văn A
          </h1>

          {isSelected && (
            <span className="text-[11px] bg-primary text-white px-2 py-[2px] rounded">
              Mặc định
            </span>
          )}
        </div>

        <p className="text-sm text-gray-600 leading-relaxed max-w-[320px]">
          123 Đường ABC, Phường XYZ, Quận 1, TP.HCM - 700000
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-medium">SĐT:</span> 0901234567
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
