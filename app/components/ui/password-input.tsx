import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import type * as React from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function PasswordInput({ type, ...rest }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <div className="mt-1 flex items-center">
        <Input
          className="pr-10"
          id="password"
          name="password"
          placeholder="Enter password"
          type={showPassword ? "text" : "password"}
          {...rest}
        />
        <Button
          className="absolute right-2 h-7 w-7 text-gray-400 hover:text-gray-500 focus:outline-none"
          onClick={() => setShowPassword(!showPassword)}
          size="icon"
          type="button"
          variant="ghost"
        >
          {showPassword ? <EyeIcon size={20} aria-hidden="true" /> : <EyeOffIcon size={20} aria-hidden="true" />}
          <span className="sr-only">Toggle password visibility</span>
        </Button>
      </div>
    </div>
  );
}
