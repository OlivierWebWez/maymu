import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68c5d43b3c70f456453c8e78", 
  requiresAuth: true // Ensure authentication is required for all operations
});
