import React, {useMemo} from 'react';
import {IconMaterial, IconFontAwesome} from './styles';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  defaultIcon?: string;
}

export function Icon({name, defaultIcon, ...rest}: IconProps) {
  const icon = useMemo(
    () => ({
      isIconMaterial: IconMaterial.hasIcon(name),
      isIconFontAwesome: IconFontAwesome.hasIcon(name),
    }),
    [name],
  );

  return (
    <>
      {icon.isIconMaterial && <IconMaterial name={name} {...rest} />}

      {!icon.isIconMaterial && icon.isIconFontAwesome && (
        <IconFontAwesome name={name} {...rest} />
      )}

      {!icon.isIconMaterial && !icon.isIconFontAwesome && defaultIcon && (
        <IconMaterial name={defaultIcon} {...rest} />
      )}
    </>
  );
}
