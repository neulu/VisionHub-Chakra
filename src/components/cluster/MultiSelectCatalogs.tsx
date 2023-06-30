import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuButtonProps,
} from '@chakra-ui/react';

const MultiSelectCatalogs = (props: MultiSelectCatalogProps): JSX.Element => {

  const { label, options, buttonProps, selectedOptions, setSelectedOptions} = props;
  
  return (
    <Menu closeOnSelect={false}>
      {({ onClose }) => (
        <>
          <MenuButton
            /* eslint-disable @typescript-eslint/ban-ts-comment */
            // @ts-ignore <MenuButton> does have a 'type' prop because it is just a button. This is to make sure clicking this doesn't submit any forms.
            type="button"
            /* eslint-enable @typescript-eslint/ban-ts-comment */
            // backgroundColor={selectedOptions.length ? "yellow.200" : "white"}
            backgroundColor={"white"}
            color={selectedOptions.length ? "teal.500" : "gray.600"}
            borderColor={selectedOptions.length ? "purple.200" : "gray.200"}
            borderWidth={1}
            p={2}
            px={3}
            borderRadius="md"
            _focus={{
              outline: "none"
            }}
            width={'100%'}
            {...buttonProps }
            textAlign="left"
          >
            {`${label}${
              selectedOptions.length > 0 ? ` (${selectedOptions.length})` : ""
            }`}            
          </MenuButton>
          <MenuList zIndex={9999999}>
            {/* <MenuGroup title={undefined}>
              <MenuItem
                onClick={() => {
                  setSelectedOptions([]);
                  // Have to close, otherwise the defaultValue won't be reset correctly
                  // and so the UI won't immediately show the menu item options unselected.
                  onClose();
                }}
              >
                Clear all
              </MenuItem>
            </MenuGroup>
            <MenuDivider /> */}
            <MenuOptionGroup
              title={undefined}
              defaultValue={selectedOptions}
              type="checkbox"
              /* eslint-disable @typescript-eslint/ban-ts-comment */
              // @ts-ignore Arguments type is just wrong upstream.
              onChange={(values: string[]) => {
                // Filter out empty strings, because, well, this component seems to add
                // an empty string out of nowhere.
                setSelectedOptions(values.filter((_) => _.length));
                props.onChange?.(values);
              }}
              /* eslint-enable @typescript-eslint/ban-ts-comment */
            >
              {options.map((option) => {
                return (
                  // Use 'type'='button' to make sure it doesn't default to 'type'='submit'.
                  <MenuItemOption
                    key={`multiselect-menu-${option}`}
                    /* eslint-disable @typescript-eslint/ban-ts-comment */
                    // @ts-ignore <MenuItemOption> does have a 'type' prop because it is just a button. This is to make sure clicking this doesn't submit any forms.
                    type="button"
                    /* eslint-enable @typescript-eslint/ban-ts-comment */
                    value={option}
                    zIndex={9999999}
                  >
                    {option}
                  </MenuItemOption>
                );
              })}
            </MenuOptionGroup>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

MultiSelectCatalogs.displayName = "MultiSelectCatalogs";

export type MultiSelectCatalogProps = {
  label: string;
  options: string[];
  onChange?: (setSelectedOptions: string[]) => void;
  buttonProps?: MenuButtonProps;
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
};

export default MultiSelectCatalogs;