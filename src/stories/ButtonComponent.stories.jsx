import React from 'react';
import ButtonComponent from '../ButtonComponent'; // Adjust the path as needed

// Define the default export to describe the component and its meta information
export default {
  title: 'Components/ButtonComponent',
  component: ButtonComponent,
  argTypes: {
    color: {
      control: 'color', // Control to change the color dynamically in the Storybook UI
    },
    disabled: {
      control: 'boolean' // Toggle enabled/disabled state
    }
  },
  parameters: {
    docs: {
      description: {
        component: `Demonstrates different states of the ButtonComponent based on user roles and interactivity. You can dynamically adjust the properties of the button using controls. For feedback, please send an email to [your-email@example.com](mailto:your-email@example.com).`
      },
    },
  }
};

// Template for creating buttons dynamically with different arguments
const Template = (args) => <ButtonComponent {...args} />;

// Default Button story
export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
  variant: 'contained',
  color: 'primary',
  disabled: false
};

// Disabled Button story
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  children: 'Disabled',
  disabled: true
};

// Mock data for different user access levels
const userAccess = {
  admin: {
    enabled: true,
    label: "Admin Access"
  },
  guest: {
    enabled: false,
    label: "Guest Access - No Permission"
  }
};

// Story showing different buttons based on user access levels
export const AccessDependentButton = () => (
  <div>
    <h3>{userAccess.admin.label}</h3>
    <ButtonComponent {...Default.args} disabled={!userAccess.admin.enabled} children="Admin Button" />
    <h3>{userAccess.guest.label}</h3>
    <ButtonComponent {...Default.args} disabled={!userAccess.guest.enabled} children="Guest Button" />
  </div>
);

// Story for showing buttons of different sizes
export const Sizes = () => (
  <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
    <ButtonComponent {...Default.args} size="small" children="Small" />
    <ButtonComponent {...Default.args} size="medium" children="Medium" />
    <ButtonComponent {...Default.args} size="large" children="Large" />
  </div>
);

// Story for showing buttons of different colors
export const Colors = () => (
  <div style={{ display: 'flex', gap: '10px', padding: '10px' }}>
    <ButtonComponent {...Default.args} color="default" children="Default" />
    <ButtonComponent {...Default.args} color="primary" children="Primary" />
    <ButtonComponent {...Default.args} color="secondary" children="Secondary" />
    <ButtonComponent {...Default.args} color="success" children="Success" />
    <ButtonComponent {...Default.args} color="error" children="Error" />
  </div>
);

// Interactive button example
export const InteractiveButton = Template.bind({});
InteractiveButton.args = {
  ...Default.args,
  children: 'Interactive Button'
};

export const CenteredLoginButton = () => (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', 
        backgroundColor: '#f4f4f4' 
      }}
    >
      <ButtonComponent 
        {...Default.args} 
        children="Login" 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          fontWeight: 'bold'
        }} 
      />
    </div>
  );