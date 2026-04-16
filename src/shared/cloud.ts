import type { CloudUserInfo, OrganizationAllowList, ShareVisibility } from "@roo-code/types"

export type { CloudUserInfo, OrganizationAllowList, ShareVisibility }

export const ORGANIZATION_ALLOW_ALL: OrganizationAllowList = {
	allowAll: true,
	providers: {},
} as const
