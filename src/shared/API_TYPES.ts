export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  BigInt: any;
  Date: any;
  Time: any;
};

export type Account = {
  __typename?: 'Account';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  owner?: Maybe<User>;
  admins?: Maybe<UserListResponse>;
  members?: Maybe<UserListResponse>;
  groups?: Maybe<GroupListResponse>;
  name?: Maybe<Scalars['String']>;
  userNotificationPreferences?: Maybe<NotificationPreferenceListResponse>;
  notifications?: Maybe<NotificationListResponse>;
  _description?: Maybe<Scalars['String']>;
};

export type AccountAdminsArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<Array<Maybe<UserOrderBy>>>;
  sort?: Maybe<Array<UserSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<UserGroupBy>;
};

export type AccountMembersArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<Array<Maybe<UserOrderBy>>>;
  sort?: Maybe<Array<UserSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<UserGroupBy>;
};

export type AccountGroupsArgs = {
  filter?: Maybe<GroupFilter>;
  orderBy?: Maybe<Array<Maybe<GroupOrderBy>>>;
  sort?: Maybe<Array<GroupSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<GroupGroupBy>;
};

export type AccountUserNotificationPreferencesArgs = {
  filter?: Maybe<NotificationPreferenceFilter>;
  orderBy?: Maybe<Array<Maybe<NotificationPreferenceOrderBy>>>;
  sort?: Maybe<Array<NotificationPreferenceSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<NotificationPreferenceGroupBy>;
};

export type AccountNotificationsArgs = {
  filter?: Maybe<NotificationFilter>;
  orderBy?: Maybe<Array<Maybe<NotificationOrderBy>>>;
  sort?: Maybe<Array<NotificationSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<NotificationGroupBy>;
};

export type Account_GroupCreateInput = {
  name: Scalars['String'];
  account?: Maybe<GroupsAccountRelationInput>;
  members?: Maybe<GroupsMembersRelationInput>;
};

export type Account_GroupUpdateInput = {
  filter?: Maybe<GroupKeyFilter>;
  data: GroupUpdateInput;
};

export type Account_NotificationCreateInput = {
  text?: Maybe<Scalars['String']>;
  users?: Maybe<NotificationsUsersRelationInput>;
  delivered?: Maybe<Scalars['Boolean']>;
  account?: Maybe<NotificationsAccountRelationInput>;
};

export type Account_NotificationPreferenceCreateInput = {
  user: NotificationPreferencesUserRelationInput;
  account?: Maybe<NotificationPreferencesAccountRelationInput>;
  emailEnabled?: Maybe<Scalars['Boolean']>;
  sMSEnabled?: Maybe<Scalars['Boolean']>;
};

export type Account_NotificationPreferenceUpdateInput = {
  filter?: Maybe<NotificationPreferenceKeyFilter>;
  data: NotificationPreferenceUpdateInput;
};

export type Account_NotificationUpdateInput = {
  filter?: Maybe<NotificationKeyFilter>;
  data: NotificationUpdateInput;
};

export type AccountCreateInput = {
  owner: AccountsOwnerRelationInput;
  admins?: Maybe<AccountsAdminsRelationInput>;
  members?: Maybe<AccountsMembersRelationInput>;
  groups?: Maybe<AccountsGroupsRelationInput>;
  name?: Maybe<Scalars['String']>;
  userNotificationPreferences?: Maybe<AccountsUserNotificationPreferencesRelationInput>;
  notifications?: Maybe<AccountsNotificationsRelationInput>;
};

export type AccountCreateManyInput = {
  name?: Maybe<Scalars['String']>;
};

export type AccountDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type AccountFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['Boolean']>;
};

export type AccountFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  name?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  owner?: Maybe<UserFilter>;
  admins?: Maybe<UserRelationFilter>;
  members?: Maybe<UserRelationFilter>;
  groups?: Maybe<GroupRelationFilter>;
  userNotificationPreferences?: Maybe<NotificationPreferenceRelationFilter>;
  notifications?: Maybe<NotificationRelationFilter>;
  AND?: Maybe<Array<AccountFilter>>;
  OR?: Maybe<Array<AccountFilter>>;
};

export type AccountGroupBy = {
  query: AccountGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type AccountGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  owner?: Maybe<UserGroupByQuery>;
  admins?: Maybe<UserGroupByQuery>;
  members?: Maybe<UserGroupByQuery>;
  groups?: Maybe<GroupGroupByQuery>;
  userNotificationPreferences?: Maybe<NotificationPreferenceGroupByQuery>;
  notifications?: Maybe<NotificationGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type AccountKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

export type AccountListResponse = {
  __typename?: 'AccountListResponse';
  items: Array<Account>;
  count: Scalars['Int'];
  groups: Array<GroupByResponse>;
};

export type AccountManyResponse = {
  __typename?: 'AccountManyResponse';
  items: Array<Account>;
  count: Scalars['Int'];
};

export enum AccountOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

export type AccountPayload = {
  __typename?: 'AccountPayload';
  mutation: MutationType;
  node?: Maybe<Account>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<Account>;
};

export type AccountRelationFilter = {
  some?: Maybe<AccountFilter>;
  every?: Maybe<AccountFilter>;
  none?: Maybe<AccountFilter>;
};

export type AccountsAdminsRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<AdminAccounts_UserCreateInput>>>;
};

export type AccountsAdminsUpdateRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  disconnect?: Maybe<Array<UserKeyFilter>>;
  reconnect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<AdminAccounts_UserCreateInput>>>;
  update?: Maybe<Array<Maybe<AdminAccounts_UserUpdateInput>>>;
};

export type AccountsGroupsRelationInput = {
  connect?: Maybe<Array<GroupKeyFilter>>;
  create?: Maybe<Array<Maybe<Account_GroupCreateInput>>>;
};

export type AccountsGroupsUpdateRelationInput = {
  connect?: Maybe<Array<GroupKeyFilter>>;
  reconnect?: Maybe<Array<GroupKeyFilter>>;
  create?: Maybe<Array<Maybe<Account_GroupCreateInput>>>;
  update?: Maybe<Array<Maybe<Account_GroupUpdateInput>>>;
};

export type AccountsMembersRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<MemberAccounts_UserCreateInput>>>;
};

export type AccountsMembersUpdateRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  disconnect?: Maybe<Array<UserKeyFilter>>;
  reconnect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<MemberAccounts_UserCreateInput>>>;
  update?: Maybe<Array<Maybe<MemberAccounts_UserUpdateInput>>>;
};

export type AccountsNotificationsRelationInput = {
  connect?: Maybe<Array<NotificationKeyFilter>>;
  create?: Maybe<Array<Maybe<Account_NotificationCreateInput>>>;
};

export type AccountsNotificationsUpdateRelationInput = {
  connect?: Maybe<Array<NotificationKeyFilter>>;
  reconnect?: Maybe<Array<NotificationKeyFilter>>;
  create?: Maybe<Array<Maybe<Account_NotificationCreateInput>>>;
  update?: Maybe<Array<Maybe<Account_NotificationUpdateInput>>>;
};

export type AccountSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  owner?: Maybe<UserSort>;
};

export type AccountsOwnerRelationInput = {
  connect?: Maybe<UserKeyFilter>;
  create?: Maybe<OwnedAccounts_UserCreateInput>;
};

export type AccountsOwnerUpdateRelationInput = {
  connect?: Maybe<UserKeyFilter>;
  reconnect?: Maybe<UserKeyFilter>;
  create?: Maybe<OwnedAccounts_UserCreateInput>;
  update?: Maybe<OwnedAccounts_UserUpdateInput>;
};

export type AccountSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<AccountFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type AccountsUserNotificationPreferencesRelationInput = {
  connect?: Maybe<Array<NotificationPreferenceKeyFilter>>;
  create?: Maybe<Array<Maybe<Account_NotificationPreferenceCreateInput>>>;
};

export type AccountsUserNotificationPreferencesUpdateRelationInput = {
  connect?: Maybe<Array<NotificationPreferenceKeyFilter>>;
  reconnect?: Maybe<Array<NotificationPreferenceKeyFilter>>;
  create?: Maybe<Array<Maybe<Account_NotificationPreferenceCreateInput>>>;
  update?: Maybe<Array<Maybe<Account_NotificationPreferenceUpdateInput>>>;
};

export type AccountUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  owner?: Maybe<AccountsOwnerUpdateRelationInput>;
  admins?: Maybe<AccountsAdminsUpdateRelationInput>;
  members?: Maybe<AccountsMembersUpdateRelationInput>;
  groups?: Maybe<AccountsGroupsUpdateRelationInput>;
  name?: Maybe<Scalars['String']>;
  userNotificationPreferences?: Maybe<AccountsUserNotificationPreferencesUpdateRelationInput>;
  notifications?: Maybe<AccountsNotificationsUpdateRelationInput>;
};

export type AdminAccounts_UserCreateInput = {
  email: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarRelationInput>;
  carRegistrationNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<UsersRolesRelationInput>;
  notifications?: Maybe<UsersNotificationsRelationInput>;
  adminAccounts?: Maybe<UsersAdminAccountsRelationInput>;
  memberAccounts?: Maybe<UsersMemberAccountsRelationInput>;
  ownedAccounts?: Maybe<UsersOwnedAccountsRelationInput>;
  groups?: Maybe<UsersGroupsRelationInput>;
  notificationPreferences?: Maybe<UsersNotificationPreferencesRelationInput>;
};

export type AdminAccounts_UserUpdateInput = {
  filter?: Maybe<UserKeyFilter>;
  data: UserUpdateInput;
};

export type Admins_AccountCreateInput = {
  owner: AccountsOwnerRelationInput;
  admins?: Maybe<AccountsAdminsRelationInput>;
  members?: Maybe<AccountsMembersRelationInput>;
  groups?: Maybe<AccountsGroupsRelationInput>;
  name?: Maybe<Scalars['String']>;
  userNotificationPreferences?: Maybe<AccountsUserNotificationPreferencesRelationInput>;
  notifications?: Maybe<AccountsNotificationsRelationInput>;
};

export type Admins_AccountUpdateInput = {
  filter?: Maybe<AccountKeyFilter>;
  data: AccountUpdateInput;
};

export enum AggregationFunctionType {
  Avg = 'AVG',
  Sum = 'SUM',
  Count = 'COUNT',
  Min = 'MIN',
  Max = 'MAX',
  GroupConcat = 'GROUP_CONCAT',
  AnyValue = 'ANY_VALUE',
  StddevPop = 'STDDEV_POP',
  StddevSamp = 'STDDEV_SAMP',
  VarPop = 'VAR_POP',
  VarSamp = 'VAR_SAMP',
}

export type ApiToken = {
  __typename?: 'ApiToken';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<RoleListResponse>;
  _description?: Maybe<Scalars['String']>;
};

export type ApiTokenRolesArgs = {
  filter?: Maybe<RoleFilter>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  sort?: Maybe<Array<RoleSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
};

export type ApiTokenCreateInput = {
  name: Scalars['String'];
  roles?: Maybe<ApiTokensRolesRelationInput>;
};

export type ApiTokenDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type ApiTokenFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  name?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  roles?: Maybe<RoleRelationFilter>;
  AND?: Maybe<Array<ApiTokenFilter>>;
  OR?: Maybe<Array<ApiTokenFilter>>;
};

export type ApiTokenGroupBy = {
  query: ApiTokenGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type ApiTokenGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  roles?: Maybe<RoleGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type ApiTokenKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type ApiTokenListResponse = {
  __typename?: 'ApiTokenListResponse';
  items: Array<ApiToken>;
  count: Scalars['Int'];
  groups: Array<GroupByResponse>;
};

export enum ApiTokenOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TokenAsc = 'token_ASC',
  TokenDesc = 'token_DESC',
}

export type ApiTokenPayload = {
  __typename?: 'ApiTokenPayload';
  mutation: MutationType;
  node?: Maybe<ApiToken>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<ApiToken>;
};

export type ApiTokenRelationFilter = {
  some?: Maybe<ApiTokenFilter>;
  every?: Maybe<ApiTokenFilter>;
  none?: Maybe<ApiTokenFilter>;
};

export type ApiTokenResponse = {
  __typename?: 'ApiTokenResponse';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<RoleListResponse>;
  token: Scalars['String'];
};

export type ApiTokenResponseRolesArgs = {
  filter?: Maybe<RoleFilter>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  sort?: Maybe<Array<RoleSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
};

export type ApiTokens_RoleCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  users?: Maybe<RolesUsersRelationInput>;
  permissions?: Maybe<PermissionsInput>;
  apiTokens?: Maybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesRelationInput>;
  teamMembers?: Maybe<RolesTeamMembersRelationInput>;
};

export type ApiTokens_RoleUpdateInput = {
  filter?: Maybe<RoleKeyFilter>;
  data: RoleUpdateInput;
};

export type ApiTokenSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
};

export type ApiTokensRolesRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<ApiTokens_RoleCreateInput>>>;
};

export type ApiTokensRolesUpdateRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  disconnect?: Maybe<Array<RoleKeyFilter>>;
  reconnect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<ApiTokens_RoleCreateInput>>>;
  update?: Maybe<Array<Maybe<ApiTokens_RoleUpdateInput>>>;
};

export type ApiTokenSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<ApiTokenFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type ApiTokenUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  roles?: Maybe<ApiTokensRolesUpdateRelationInput>;
};

export type Application = {
  __typename?: 'Application';
  id: Scalars['ID'];
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  appType: Scalars['String'];
  status: ApplicationStatusEnum;
};

export type ApplicationDeleteMutationInput = {
  id: Scalars['String'];
  force?: Maybe<Scalars['Boolean']>;
};

export type ApplicationInstallInput = {
  appType: Scalars['String'];
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ApplicationListResponse = {
  __typename?: 'ApplicationListResponse';
  items: Array<Application>;
  count: Scalars['Int'];
};

export enum ApplicationStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type ApplicationUpdateInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Auth = {
  __typename?: 'Auth';
  refreshToken?: Maybe<Scalars['String']>;
  idToken?: Maybe<Scalars['String']>;
};

export type AuthenticationProfile = {
  __typename?: 'AuthenticationProfile';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  managementDomain?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  databaseName?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<RoleListResponse>;
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
  _description?: Maybe<Scalars['String']>;
};

export type AuthenticationProfileRolesArgs = {
  filter?: Maybe<RoleFilter>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  sort?: Maybe<Array<RoleSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
};

export type AuthenticationProfileConnectionOptions = {
  __typename?: 'AuthenticationProfileConnectionOptions';
  google?: Maybe<GoogleOptions>;
  facebook?: Maybe<FacebookOptions>;
  github?: Maybe<GithubOptions>;
};

export type AuthenticationProfileConnectionsOptionsInput = {
  google?: Maybe<GoogleOptionsInput>;
  facebook?: Maybe<FacebookOptionsInput>;
  github?: Maybe<GithubOptionsInput>;
};

export type AuthenticationProfileCreateInput = {
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  managementDomain?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  databaseName?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<AuthenticationProfilesRolesRelationInput>;
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AuthenticationProfileCreateManyInput = {
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  managementDomain?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  databaseName?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AuthenticationProfileDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type AuthenticationProfileFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  name?: Maybe<StringPredicate>;
  type?: Maybe<StringPredicate>;
  secret?: Maybe<StringPredicate>;
  managementDomain?: Maybe<StringPredicate>;
  clientId?: Maybe<StringPredicate>;
  databaseName?: Maybe<StringPredicate>;
  domain?: Maybe<StringPredicate>;
  selfSignUpEnabled?: Maybe<BoolPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  roles?: Maybe<RoleRelationFilter>;
  AND?: Maybe<Array<AuthenticationProfileFilter>>;
  OR?: Maybe<Array<AuthenticationProfileFilter>>;
};

export type AuthenticationProfileGroupBy = {
  query: AuthenticationProfileGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type AuthenticationProfileGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  type?: Maybe<Array<GroupByField>>;
  secret?: Maybe<Array<GroupByField>>;
  managementDomain?: Maybe<Array<GroupByField>>;
  clientId?: Maybe<Array<GroupByField>>;
  databaseName?: Maybe<Array<GroupByField>>;
  domain?: Maybe<Array<GroupByField>>;
  selfSignUpEnabled?: Maybe<Array<GroupByField>>;
  selfSignUpEmailDomains?: Maybe<Array<GroupByField>>;
  audiences?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  roles?: Maybe<RoleGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type AuthenticationProfileKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type AuthenticationProfileListResponse = {
  __typename?: 'AuthenticationProfileListResponse';
  items: Array<AuthenticationProfile>;
  count: Scalars['Int'];
  groups: Array<GroupByResponse>;
};

export type AuthenticationProfileManyResponse = {
  __typename?: 'AuthenticationProfileManyResponse';
  items: Array<AuthenticationProfile>;
  count: Scalars['Int'];
};

export enum AuthenticationProfileOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  SecretAsc = 'secret_ASC',
  SecretDesc = 'secret_DESC',
  ManagementDomainAsc = 'managementDomain_ASC',
  ManagementDomainDesc = 'managementDomain_DESC',
  ClientIdAsc = 'clientId_ASC',
  ClientIdDesc = 'clientId_DESC',
  DatabaseNameAsc = 'databaseName_ASC',
  DatabaseNameDesc = 'databaseName_DESC',
  DomainAsc = 'domain_ASC',
  DomainDesc = 'domain_DESC',
  SelfSignUpEnabledAsc = 'selfSignUpEnabled_ASC',
  SelfSignUpEnabledDesc = 'selfSignUpEnabled_DESC',
}

export type AuthenticationProfilePayload = {
  __typename?: 'AuthenticationProfilePayload';
  mutation: MutationType;
  node?: Maybe<AuthenticationProfile>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<AuthenticationProfile>;
};

export type AuthenticationProfileRelationFilter = {
  some?: Maybe<AuthenticationProfileFilter>;
  every?: Maybe<AuthenticationProfileFilter>;
  none?: Maybe<AuthenticationProfileFilter>;
};

export type AuthenticationProfiles_RoleCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  users?: Maybe<RolesUsersRelationInput>;
  permissions?: Maybe<PermissionsInput>;
  apiTokens?: Maybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesRelationInput>;
  teamMembers?: Maybe<RolesTeamMembersRelationInput>;
};

export type AuthenticationProfiles_RoleUpdateInput = {
  filter?: Maybe<RoleKeyFilter>;
  data: RoleUpdateInput;
};

export type AuthenticationProfileSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  secret?: Maybe<SortOrder>;
  managementDomain?: Maybe<SortOrder>;
  clientId?: Maybe<SortOrder>;
  databaseName?: Maybe<SortOrder>;
  domain?: Maybe<SortOrder>;
  selfSignUpEnabled?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
};

export type AuthenticationProfilesRolesRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<AuthenticationProfiles_RoleCreateInput>>>;
};

export type AuthenticationProfilesRolesUpdateRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  disconnect?: Maybe<Array<RoleKeyFilter>>;
  reconnect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<AuthenticationProfiles_RoleCreateInput>>>;
  update?: Maybe<Array<Maybe<AuthenticationProfiles_RoleUpdateInput>>>;
};

export type AuthenticationProfileSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<AuthenticationProfileFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type AuthenticationProfileUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  managementDomain?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  databaseName?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<AuthenticationProfilesRolesUpdateRelationInput>;
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AuthenticationSetting = {
  __typename?: 'AuthenticationSetting';
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  allowedCallbacks?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedWebOrigins?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedLogouts?: Maybe<Array<Maybe<Scalars['String']>>>;
  connections?: Maybe<AuthenticationProfileConnectionOptions>;
  _description?: Maybe<Scalars['String']>;
};

export type AuthenticationSettingFilter = {
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  AND?: Maybe<Array<AuthenticationSettingFilter>>;
  OR?: Maybe<Array<AuthenticationSettingFilter>>;
};

export type AuthenticationSettingPayload = {
  __typename?: 'AuthenticationSettingPayload';
  mutation: MutationType;
  node?: Maybe<AuthenticationSetting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<AuthenticationSetting>;
};

export type AuthenticationSettingSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<AuthenticationSettingFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type AuthenticationSettingUpdateInput = {
  allowedCallbacks?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedWebOrigins?: Maybe<Array<Maybe<Scalars['String']>>>;
  allowedLogouts?: Maybe<Array<Maybe<Scalars['String']>>>;
  connections?: Maybe<AuthenticationProfileConnectionsOptionsInput>;
};

export type Avatar_TeamMemberUpdateInput = {
  filter?: Maybe<TeamMemberKeyFilter>;
  data: TeamMemberUpdateInput;
};

export type Avatar_UserCreateInput = {
  email: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarRelationInput>;
  carRegistrationNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<UsersRolesRelationInput>;
  notifications?: Maybe<UsersNotificationsRelationInput>;
  adminAccounts?: Maybe<UsersAdminAccountsRelationInput>;
  memberAccounts?: Maybe<UsersMemberAccountsRelationInput>;
  ownedAccounts?: Maybe<UsersOwnedAccountsRelationInput>;
  groups?: Maybe<UsersGroupsRelationInput>;
  notificationPreferences?: Maybe<UsersNotificationPreferencesRelationInput>;
};

export type Avatar_UserUpdateInput = {
  filter?: Maybe<UserKeyFilter>;
  data: UserUpdateInput;
};

export type BigIntPredicateHaving = {
  equals?: Maybe<Scalars['BigInt']>;
  not_equals?: Maybe<Scalars['BigInt']>;
  in?: Maybe<Array<Scalars['BigInt']>>;
  not_in?: Maybe<Array<Scalars['BigInt']>>;
  lt?: Maybe<Scalars['BigInt']>;
  lte?: Maybe<Scalars['BigInt']>;
  gt?: Maybe<Scalars['BigInt']>;
  gte?: Maybe<Scalars['BigInt']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<BigIntPredicateHaving>>;
  OR?: Maybe<Array<BigIntPredicateHaving>>;
};

export type BillingCurrentPlanResponse = {
  __typename?: 'BillingCurrentPlanResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  displayName?: Maybe<Scalars['String']>;
  trialEnd?: Maybe<Scalars['DateTime']>;
  status?: Maybe<WorkspaceStatus>;
  nextPlan?: Maybe<BillingNextPlanResponse>;
};

export type BillingDetailsResponse = {
  __typename?: 'BillingDetailsResponse';
  last4?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  brand?: Maybe<Scalars['String']>;
};

export type BillingDetailsUpdateMutationInput = {
  cardToken: Scalars['String'];
};

export type BillingInvoiceItem = {
  __typename?: 'BillingInvoiceItem';
  id: Scalars['ID'];
  periodStart?: Maybe<Scalars['DateTime']>;
  periodEnd?: Maybe<Scalars['DateTime']>;
  paid?: Maybe<Scalars['Boolean']>;
  invoicePdf?: Maybe<Scalars['String']>;
  amountDue?: Maybe<Scalars['Float']>;
  amountPaid?: Maybe<Scalars['Float']>;
  amountRemaining?: Maybe<Scalars['Float']>;
  endingBalance?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
};

export enum BillingInvoicesListFilterType {
  Workspace = 'WORKSPACE',
  Customer = 'CUSTOMER',
}

export type BillingInvoicesListResponse = {
  __typename?: 'BillingInvoicesListResponse';
  items: Array<BillingInvoiceItem>;
  count: Scalars['Int'];
};

export type BillingLimitMetricItem = {
  __typename?: 'BillingLimitMetricItem';
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  showPriority?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
};

export type BillingMetricUsageItem = {
  __typename?: 'BillingMetricUsageItem';
  limitMetric?: Maybe<BillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']>;
};

export type BillingMetricUsageQuotaItem = {
  __typename?: 'BillingMetricUsageQuotaItem';
  limitMetric?: Maybe<BillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']>;
};

export type BillingMetricUsageQuotasListResponse = {
  __typename?: 'BillingMetricUsageQuotasListResponse';
  items: Array<BillingMetricUsageQuotaItem>;
  count: Scalars['Int'];
};

export type BillingMetricUsagesListFilter = {
  entryDate: DateTimePredicate;
};

export type BillingMetricUsagesListResponse = {
  __typename?: 'BillingMetricUsagesListResponse';
  items: Array<BillingMetricUsageItem>;
  count: Scalars['Int'];
};

export type BillingNextPlanResponse = {
  __typename?: 'BillingNextPlanResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  displayName?: Maybe<Scalars['String']>;
};

export type BillingPlanBaseInfo = {
  __typename?: 'BillingPlanBaseInfo';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  isCustom?: Maybe<Scalars['Boolean']>;
  isLegacy?: Maybe<Scalars['Boolean']>;
};

export type BillingPlanUpdateMutationInput = {
  planId: Scalars['ID'];
};

export type BoolPredicate = {
  equals?: Maybe<Scalars['Boolean']>;
  not_equals?: Maybe<Scalars['Boolean']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
};

export type BoolPredicateHaving = {
  equals?: Maybe<Scalars['Boolean']>;
  not_equals?: Maybe<Scalars['Boolean']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<BoolPredicateHaving>>;
  OR?: Maybe<Array<BoolPredicateHaving>>;
};

export type CustomTableField = {
  __typename?: 'CustomTableField';
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldType?: Maybe<FieldType>;
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes>;
};

export type DateFieldTypeAttributes = {
  __typename?: 'DateFieldTypeAttributes';
  format: Scalars['String'];
};

export enum DatePartFunctionType {
  Date = 'DATE',
  Time = 'TIME',
  Week = 'WEEK',
  WeekDay = 'WEEK_DAY',
  WeekOfYear = 'WEEK_OF_YEAR',
  Year = 'YEAR',
  YearWeek = 'YEAR_WEEK',
  DayName = 'DAY_NAME',
  DayOfMonth = 'DAY_OF_MONTH',
  DayOfWeek = 'DAY_OF_WEEK',
  DayOfYear = 'DAY_OF_YEAR',
  Quarter = 'QUARTER',
  Month = 'MONTH',
  MonthName = 'MONTH_NAME',
  Hour = 'HOUR',
  Minute = 'MINUTE',
  Second = 'SECOND',
  Microsecond = 'MICROSECOND',
  LastDay = 'LAST_DAY',
}

export type DatePredicateHaving = {
  equals?: Maybe<Scalars['Date']>;
  not_equals?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Scalars['Date']>>;
  not_in?: Maybe<Array<Scalars['Date']>>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<DatePredicateHaving>>;
  OR?: Maybe<Array<DatePredicateHaving>>;
};

export type DateTimePredicate = {
  equals?: Maybe<Scalars['DateTime']>;
  not_equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  not_in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
};

export type DateTimePredicateHaving = {
  equals?: Maybe<Scalars['DateTime']>;
  not_equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  not_in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<DateTimePredicateHaving>>;
  OR?: Maybe<Array<DateTimePredicateHaving>>;
};

export enum DateTypeFormatEnum {
  Date = 'DATE',
  Datetime = 'DATETIME',
}

export type DeployDataResponse = {
  __typename?: 'DeployDataResponse';
  uploadBuildUrl: Scalars['String'];
  uploadMetaDataUrl: Scalars['String'];
  buildName: Scalars['String'];
};

export type DeployingBuildInput = {
  buildName: Scalars['String'];
  options?: Maybe<DeployOptions>;
};

export enum DeployModeEnum {
  Full = 'FULL',
  OnlyPlugins = 'ONLY_PLUGINS',
  OnlyProject = 'ONLY_PROJECT',
}

export type DeployOptions = {
  mode?: Maybe<DeployModeEnum>;
  pluginNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum DeployStatusEnum {
  Deploying = 'deploying',
  CompleteError = 'complete_error',
  CompleteSuccess = 'complete_success',
  Compiling = 'compiling',
  Preparing = 'preparing',
  Initialize = 'initialize',
}

export type DeployStatusResult = {
  __typename?: 'DeployStatusResult';
  status: DeployStatusEnum;
  message?: Maybe<Scalars['String']>;
};

export type EnvironmentVariable = {
  __typename?: 'EnvironmentVariable';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  _description?: Maybe<Scalars['String']>;
};

export type EnvironmentVariableCreateInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type EnvironmentVariableCreateManyInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type EnvironmentVariableDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type EnvironmentVariableFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  name?: Maybe<StringPredicate>;
  value?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  AND?: Maybe<Array<EnvironmentVariableFilter>>;
  OR?: Maybe<Array<EnvironmentVariableFilter>>;
};

export type EnvironmentVariableGroupBy = {
  query: EnvironmentVariableGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type EnvironmentVariableGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  value?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type EnvironmentVariableKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type EnvironmentVariableListResponse = {
  __typename?: 'EnvironmentVariableListResponse';
  items: Array<EnvironmentVariable>;
  count: Scalars['Int'];
  groups: Array<GroupByResponse>;
};

export type EnvironmentVariableManyResponse = {
  __typename?: 'EnvironmentVariableManyResponse';
  items: Array<EnvironmentVariable>;
  count: Scalars['Int'];
};

export enum EnvironmentVariableOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
}

export type EnvironmentVariablePayload = {
  __typename?: 'EnvironmentVariablePayload';
  mutation: MutationType;
  node?: Maybe<EnvironmentVariable>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<EnvironmentVariable>;
};

export type EnvironmentVariableSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  value?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
};

export type EnvironmentVariableSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<EnvironmentVariableFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type EnvironmentVariableUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type FacebookOptions = {
  __typename?: 'FacebookOptions';
  enabled: Scalars['Boolean'];
  app_id: Scalars['String'];
  app_secret: Scalars['String'];
};

export type FacebookOptionsInput = {
  enabled: Scalars['Boolean'];
  app_id: Scalars['String'];
  app_secret: Scalars['String'];
};

export type FieldDataFeatures = {
  __typename?: 'FieldDataFeatures';
  create: Scalars['Boolean'];
  update: Scalars['Boolean'];
  sort: Scalars['Boolean'];
};

export type FieldSchemaFeatures = {
  __typename?: 'FieldSchemaFeatures';
  update: Scalars['Boolean'];
  delete: Scalars['Boolean'];
};

export enum FieldType {
  Id = 'ID',
  Uuid = 'UUID',
  Json = 'JSON',
  Number = 'NUMBER',
  Text = 'TEXT',
  Date = 'DATE',
  Switch = 'SWITCH',
  Relation = 'RELATION',
  MissingRelation = 'MISSING_RELATION',
  OneWayRelation = 'ONE_WAY_RELATION',
  File = 'FILE',
  Smart = 'SMART',
}

export type FieldTypeAttributes =
  | DateFieldTypeAttributes
  | FileFieldTypeAttributes
  | MissingRelationFieldTypeAttributes
  | NumberFieldTypeAttributes
  | SmartFieldTypeAttributes
  | SwitchFieldTypeAttributes
  | TextFieldTypeAttributes
  | UuidFieldTypeAttributes;

export type FieldTypeAttributesInput = {
  format?: Maybe<Scalars['String']>;
  precision?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  minValue?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  isBigInt?: Maybe<Scalars['Boolean']>;
  fieldSize?: Maybe<Scalars['Int']>;
  expiration?: Maybe<Scalars['Int']>;
  listOptions?: Maybe<Array<Scalars['String']>>;
  maxSize?: Maybe<Scalars['Int']>;
  typeRestrictions?: Maybe<Array<Scalars['String']>>;
};

export type File = {
  __typename?: 'File';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  fileId?: Maybe<Scalars['String']>;
  downloadUrl?: Maybe<Scalars['String']>;
  shareUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  uploaded?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  uploadUrl?: Maybe<Scalars['String']>;
  fields?: Maybe<Scalars['JSON']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  settings_menuBarLogo?: Maybe<SettingListResponse>;
  settings_landingPageImage?: Maybe<SettingListResponse>;
  users_avatar?: Maybe<UserListResponse>;
  teamMembers_avatar?: Maybe<TeamMemberListResponse>;
  previewUrl?: Maybe<Scalars['String']>;
  _description?: Maybe<Scalars['String']>;
};

export type FileSettings_MenuBarLogoArgs = {
  filter?: Maybe<SettingFilter>;
  orderBy?: Maybe<Array<Maybe<SettingOrderBy>>>;
  sort?: Maybe<Array<SettingSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<SettingGroupBy>;
};

export type FileSettings_LandingPageImageArgs = {
  filter?: Maybe<SettingFilter>;
  orderBy?: Maybe<Array<Maybe<SettingOrderBy>>>;
  sort?: Maybe<Array<SettingSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<SettingGroupBy>;
};

export type FileUsers_AvatarArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<Array<Maybe<UserOrderBy>>>;
  sort?: Maybe<Array<UserSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<UserGroupBy>;
};

export type FileTeamMembers_AvatarArgs = {
  filter?: Maybe<TeamMemberFilter>;
  orderBy?: Maybe<Array<Maybe<TeamMemberOrderBy>>>;
  sort?: Maybe<Array<TeamMemberSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<TeamMemberGroupBy>;
};

export type FileCreateInput = {
  fileId?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  users_avatar?: Maybe<FilesUsers_AvatarRelationInput>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarRelationInput>;
};

export type FileCreateManyInput = {
  fileId?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
};

export type FileDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type FileFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
  fileId?: Maybe<Scalars['Boolean']>;
  downloadUrl?: Maybe<Scalars['Boolean']>;
  shareUrl?: Maybe<Scalars['Boolean']>;
  provider?: Maybe<Scalars['Boolean']>;
  public?: Maybe<Scalars['Boolean']>;
  uploaded?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['Boolean']>;
  uploadUrl?: Maybe<Scalars['Boolean']>;
  fields?: Maybe<Scalars['Boolean']>;
  meta?: Maybe<Scalars['Boolean']>;
  mods?: Maybe<Scalars['Boolean']>;
};

export type FileFieldTypeAttributes = {
  __typename?: 'FileFieldTypeAttributes';
  format: Scalars['String'];
  maxSize?: Maybe<Scalars['Int']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  showUrl?: Maybe<Scalars['Boolean']>;
  typeRestrictions?: Maybe<Array<Scalars['String']>>;
  expiration?: Maybe<Scalars['Int']>;
};

export type FileFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  fileId?: Maybe<StringPredicate>;
  downloadUrl?: Maybe<StringPredicate>;
  shareUrl?: Maybe<StringPredicate>;
  provider?: Maybe<StringPredicate>;
  public?: Maybe<BoolPredicate>;
  uploaded?: Maybe<BoolPredicate>;
  filename?: Maybe<StringPredicate>;
  uploadUrl?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  settings_menuBarLogo?: Maybe<SettingRelationFilter>;
  settings_landingPageImage?: Maybe<SettingRelationFilter>;
  users_avatar?: Maybe<UserRelationFilter>;
  teamMembers_avatar?: Maybe<TeamMemberRelationFilter>;
  AND?: Maybe<Array<FileFilter>>;
  OR?: Maybe<Array<FileFilter>>;
};

export type FileGroupBy = {
  query: FileGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type FileGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  fileId?: Maybe<Array<GroupByField>>;
  downloadUrl?: Maybe<Array<GroupByField>>;
  shareUrl?: Maybe<Array<GroupByField>>;
  provider?: Maybe<Array<GroupByField>>;
  public?: Maybe<Array<GroupByField>>;
  uploaded?: Maybe<Array<GroupByField>>;
  filename?: Maybe<Array<GroupByField>>;
  uploadUrl?: Maybe<Array<GroupByField>>;
  fields?: Maybe<Array<GroupByField>>;
  meta?: Maybe<Array<GroupByField>>;
  mods?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  settings_menuBarLogo?: Maybe<SettingGroupByQuery>;
  settings_landingPageImage?: Maybe<SettingGroupByQuery>;
  users_avatar?: Maybe<UserGroupByQuery>;
  teamMembers_avatar?: Maybe<TeamMemberGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type FileKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  fileId?: Maybe<Scalars['String']>;
};

export type FileListResponse = {
  __typename?: 'FileListResponse';
  items: Array<File>;
  count: Scalars['Int'];
  groups: Array<GroupByResponse>;
};

export type FileManyResponse = {
  __typename?: 'FileManyResponse';
  items: Array<File>;
  count: Scalars['Int'];
};

export enum FileOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  FileIdAsc = 'fileId_ASC',
  FileIdDesc = 'fileId_DESC',
  DownloadUrlAsc = 'downloadUrl_ASC',
  DownloadUrlDesc = 'downloadUrl_DESC',
  ShareUrlAsc = 'shareUrl_ASC',
  ShareUrlDesc = 'shareUrl_DESC',
  ProviderAsc = 'provider_ASC',
  ProviderDesc = 'provider_DESC',
  PublicAsc = 'public_ASC',
  PublicDesc = 'public_DESC',
  UploadedAsc = 'uploaded_ASC',
  UploadedDesc = 'uploaded_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  UploadUrlAsc = 'uploadUrl_ASC',
  UploadUrlDesc = 'uploadUrl_DESC',
  FieldsAsc = 'fields_ASC',
  FieldsDesc = 'fields_DESC',
  MetaAsc = 'meta_ASC',
  MetaDesc = 'meta_DESC',
  ModsAsc = 'mods_ASC',
  ModsDesc = 'mods_DESC',
}

export type FilePayload = {
  __typename?: 'FilePayload';
  mutation: MutationType;
  node?: Maybe<File>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<File>;
};

export type FileSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  fileId?: Maybe<SortOrder>;
  downloadUrl?: Maybe<SortOrder>;
  shareUrl?: Maybe<SortOrder>;
  provider?: Maybe<SortOrder>;
  public?: Maybe<SortOrder>;
  uploaded?: Maybe<SortOrder>;
  filename?: Maybe<SortOrder>;
  uploadUrl?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
};

export type FilesTeamMembers_AvatarRelationInput = {
  connect?: Maybe<Array<TeamMemberKeyFilter>>;
};

export type FilesTeamMembers_AvatarUpdateRelationInput = {
  connect?: Maybe<Array<TeamMemberKeyFilter>>;
  disconnect?: Maybe<Array<TeamMemberKeyFilter>>;
  reconnect?: Maybe<Array<TeamMemberKeyFilter>>;
  update?: Maybe<Array<Maybe<Avatar_TeamMemberUpdateInput>>>;
};

export type FileSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<FileFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type FilesUsers_AvatarRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<Avatar_UserCreateInput>>>;
};

export type FilesUsers_AvatarUpdateRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  disconnect?: Maybe<Array<UserKeyFilter>>;
  reconnect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<Avatar_UserCreateInput>>>;
  update?: Maybe<Array<Maybe<Avatar_UserUpdateInput>>>;
};

export enum FileTypeFormatEnum {
  File = 'FILE',
  Image = 'IMAGE',
}

export type FileUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  fileId?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  users_avatar?: Maybe<FilesUsers_AvatarUpdateRelationInput>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarUpdateRelationInput>;
};

export type FileUploadInfoResponse = {
  __typename?: 'FileUploadInfoResponse';
  policy: Scalars['String'];
  signature: Scalars['String'];
  apiKey: Scalars['String'];
  path: Scalars['String'];
};

export type FloatPredicateHaving = {
  equals?: Maybe<Scalars['Float']>;
  not_equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  not_in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<FloatPredicateHaving>>;
  OR?: Maybe<Array<FloatPredicateHaving>>;
};

export type FunctionInfo = {
  name: Scalars['String'];
  functionType: FunctionType;
  description?: Maybe<Scalars['String']>;
  application?: Maybe<Application>;
};

export type FunctionInfoFilter = {
  name?: Maybe<Scalars['String']>;
  functionType?: Maybe<FunctionType>;
  description?: Maybe<Scalars['String']>;
};

export enum FunctionInfoOrderBy {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  FunctionTypeAsc = 'functionType_ASC',
  FunctionTypeDesc = 'functionType_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
}

export type FunctionListResponse = {
  __typename?: 'FunctionListResponse';
  items: Array<FunctionInfo>;
  count: Scalars['Int'];
};

export type FunctionResolverInfo = FunctionInfo & {
  __typename?: 'FunctionResolverInfo';
  name: Scalars['String'];
  functionType: FunctionType;
  description?: Maybe<Scalars['String']>;
  gqlType: Scalars['String'];
  application?: Maybe<Application>;
};

export type FunctionTaskInfo = FunctionInfo & {
  __typename?: 'FunctionTaskInfo';
  name: Scalars['String'];
  functionType: FunctionType;
  description?: Maybe<Scalars['String']>;
  scheduleExpression?: Maybe<Scalars['String']>;
  application?: Maybe<Application>;
};

export type FunctionTriggerInfo = FunctionInfo & {
  __typename?: 'FunctionTriggerInfo';
  name: Scalars['String'];
  functionType: FunctionType;
  description?: Maybe<Scalars['String']>;
  operation: Scalars['String'];
  tableName: Scalars['String'];
  type: Scalars['String'];
  application?: Maybe<Application>;
};

export enum FunctionType {
  Resolver = 'resolver',
  Trigger = 'trigger',
  Webhook = 'webhook',
  Task = 'task',
  Schedule = 'schedule',
}

export type FunctionWebhookInfo = FunctionInfo & {
  __typename?: 'FunctionWebhookInfo';
  name: Scalars['String'];
  functionType: FunctionType;
  description?: Maybe<Scalars['String']>;
  httpMethod: Scalars['String'];
  workspaceRelativePath: Scalars['String'];
  application?: Maybe<Application>;
};

export type GithubOptions = {
  __typename?: 'GithubOptions';
  enabled: Scalars['Boolean'];
  client_id: Scalars['String'];
  client_secret: Scalars['String'];
};

export type GithubOptionsInput = {
  enabled: Scalars['Boolean'];
  client_id: Scalars['String'];
  client_secret: Scalars['String'];
};

export type GoogleOptions = {
  __typename?: 'GoogleOptions';
  enabled: Scalars['Boolean'];
  client_id: Scalars['String'];
  client_secret: Scalars['String'];
};

export type GoogleOptionsInput = {
  enabled: Scalars['Boolean'];
  client_id: Scalars['String'];
  client_secret: Scalars['String'];
};

export type Group = {
  __typename?: 'Group';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  name?: Maybe<Scalars['String']>;
  account?: Maybe<Account>;
  members?: Maybe<UserListResponse>;
  _description?: Maybe<Scalars['String']>;
};

export type GroupMembersArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<Array<Maybe<UserOrderBy>>>;
  sort?: Maybe<Array<UserSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<UserGroupBy>;
};

export type GroupByField = {
  as?: Maybe<Scalars['String']>;
  fn?: Maybe<Array<Maybe<GroupByFieldFunction>>>;
};

export type GroupByFieldFunction = {
  aggregate?: Maybe<AggregationFunctionType>;
  distinct?: Maybe<Scalars['Boolean']>;
  datePart?: Maybe<DatePartFunctionType>;
  abs?: Maybe<Scalars['Boolean']>;
  ceil?: Maybe<Scalars['Boolean']>;
  crc32?: Maybe<Scalars['Boolean']>;
  floor?: Maybe<Scalars['Boolean']>;
  mod?: Maybe<Scalars['Int']>;
  round?: Maybe<Scalars['Int']>;
  sign?: Maybe<Scalars['Boolean']>;
  truncate?: Maybe<Scalars['Int']>;
  left?: Maybe<Scalars['Int']>;
  right?: Maybe<Scalars['Int']>;
  locate?: Maybe<LocateFunctionArguments>;
  substring?: Maybe<SubstringFunctionArguments>;
  replace?: Maybe<ReplaceFunctionArguments>;
  reverse?: Maybe<Scalars['Boolean']>;
  trim?: Maybe<TrimFunctionArguments>;
  ltrim?: Maybe<Scalars['Boolean']>;
  rtrim?: Maybe<Scalars['Boolean']>;
  lower?: Maybe<Scalars['Boolean']>;
  upper?: Maybe<Scalars['Boolean']>;
  ascii?: Maybe<Scalars['Boolean']>;
  hex?: Maybe<Scalars['Boolean']>;
  bitLength?: Maybe<Scalars['Boolean']>;
  charLength?: Maybe<Scalars['Boolean']>;
  length?: Maybe<Scalars['Boolean']>;
  like?: Maybe<PatternFunctionArguments>;
  notLike?: Maybe<PatternFunctionArguments>;
  lpad?: Maybe<StringPadFunctionArguments>;
  rpad?: Maybe<StringPadFunctionArguments>;
  ifNull?: Maybe<Scalars['String']>;
  isNull?: Maybe<Scalars['Boolean']>;
  nullIf?: Maybe<Scalars['String']>;
};

export type GroupByResponse = {
  __typename?: 'GroupByResponse';
  ID?: Maybe<Scalars['ID']>;
  String?: Maybe<Scalars['String']>;
  Int?: Maybe<Scalars['Int']>;
  BigInt?: Maybe<Scalars['BigInt']>;
  Float?: Maybe<Scalars['Float']>;
  DateTime?: Maybe<Scalars['DateTime']>;
  Date?: Maybe<Scalars['Date']>;
  Boolean?: Maybe<Scalars['Boolean']>;
  JSON?: Maybe<Scalars['JSON']>;
  GroupIds?: Maybe<Array<Scalars['ID']>>;
  UserGroup: UserListResponse;
  FileGroup: FileListResponse;
  RoleGroup: RoleListResponse;
  ApiTokenGroup: ApiTokenListResponse;
  EnvironmentVariableGroup: EnvironmentVariableListResponse;
  AuthenticationProfileGroup: AuthenticationProfileListResponse;
  TeamMemberGroup: TeamMemberListResponse;
  GroupGroup: GroupListResponse;
  NotificationGroup: NotificationListResponse;
  AccountGroup: AccountListResponse;
  NotificationPreferenceGroup: NotificationPreferenceListResponse;
};

export type GroupByResponseUserGroupArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<Array<Maybe<UserOrderBy>>>;
  sort?: Maybe<Array<UserSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<UserGroupBy>;
};

export type GroupByResponseFileGroupArgs = {
  filter?: Maybe<FileFilter>;
  orderBy?: Maybe<Array<Maybe<FileOrderBy>>>;
  sort?: Maybe<Array<FileSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<FileGroupBy>;
};

export type GroupByResponseRoleGroupArgs = {
  filter?: Maybe<RoleFilter>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  sort?: Maybe<Array<RoleSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
};

export type GroupByResponseApiTokenGroupArgs = {
  filter?: Maybe<ApiTokenFilter>;
  orderBy?: Maybe<Array<Maybe<ApiTokenOrderBy>>>;
  sort?: Maybe<Array<ApiTokenSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<ApiTokenGroupBy>;
};

export type GroupByResponseEnvironmentVariableGroupArgs = {
  filter?: Maybe<EnvironmentVariableFilter>;
  orderBy?: Maybe<Array<Maybe<EnvironmentVariableOrderBy>>>;
  sort?: Maybe<Array<EnvironmentVariableSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<EnvironmentVariableGroupBy>;
};

export type GroupByResponseAuthenticationProfileGroupArgs = {
  filter?: Maybe<AuthenticationProfileFilter>;
  orderBy?: Maybe<Array<Maybe<AuthenticationProfileOrderBy>>>;
  sort?: Maybe<Array<AuthenticationProfileSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AuthenticationProfileGroupBy>;
};

export type GroupByResponseTeamMemberGroupArgs = {
  filter?: Maybe<TeamMemberFilter>;
  orderBy?: Maybe<Array<Maybe<TeamMemberOrderBy>>>;
  sort?: Maybe<Array<TeamMemberSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<TeamMemberGroupBy>;
};

export type GroupByResponseGroupGroupArgs = {
  filter?: Maybe<GroupFilter>;
  orderBy?: Maybe<Array<Maybe<GroupOrderBy>>>;
  sort?: Maybe<Array<GroupSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<GroupGroupBy>;
};

export type GroupByResponseNotificationGroupArgs = {
  filter?: Maybe<NotificationFilter>;
  orderBy?: Maybe<Array<Maybe<NotificationOrderBy>>>;
  sort?: Maybe<Array<NotificationSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<NotificationGroupBy>;
};

export type GroupByResponseAccountGroupArgs = {
  filter?: Maybe<AccountFilter>;
  orderBy?: Maybe<Array<Maybe<AccountOrderBy>>>;
  sort?: Maybe<Array<AccountSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AccountGroupBy>;
};

export type GroupByResponseNotificationPreferenceGroupArgs = {
  filter?: Maybe<NotificationPreferenceFilter>;
  orderBy?: Maybe<Array<Maybe<NotificationPreferenceOrderBy>>>;
  sort?: Maybe<Array<NotificationPreferenceSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<NotificationPreferenceGroupBy>;
};

export type GroupBySort = {
  alias: Scalars['String'];
  direction: SortOrder;
};

export type GroupCreateInput = {
  name: Scalars['String'];
  account?: Maybe<GroupsAccountRelationInput>;
  members?: Maybe<GroupsMembersRelationInput>;
};

export type GroupCreateManyInput = {
  name: Scalars['String'];
};

export type GroupDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type GroupFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['Boolean']>;
};

export type GroupFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  name?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  account?: Maybe<AccountFilter>;
  members?: Maybe<UserRelationFilter>;
  AND?: Maybe<Array<GroupFilter>>;
  OR?: Maybe<Array<GroupFilter>>;
};

export type GroupGroupBy = {
  query: GroupGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type GroupGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  account?: Maybe<AccountGroupByQuery>;
  members?: Maybe<UserGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type GroupIdentifiersGroupByField = {
  as: Scalars['String'];
};

export type GroupKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

export type GroupListResponse = {
  __typename?: 'GroupListResponse';
  items: Array<Group>;
  count: Scalars['Int'];
  groups: Array<GroupByResponse>;
};

export type GroupManyResponse = {
  __typename?: 'GroupManyResponse';
  items: Array<Group>;
  count: Scalars['Int'];
};

export enum GroupOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
}

export type GroupPayload = {
  __typename?: 'GroupPayload';
  mutation: MutationType;
  node?: Maybe<Group>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<Group>;
};

export type GroupRelationFilter = {
  some?: Maybe<GroupFilter>;
  every?: Maybe<GroupFilter>;
  none?: Maybe<GroupFilter>;
};

export type Groups_AccountCreateInput = {
  owner?: Maybe<AccountsOwnerRelationInput>;
  admins?: Maybe<AccountsAdminsRelationInput>;
  members?: Maybe<AccountsMembersRelationInput>;
  groups?: Maybe<AccountsGroupsRelationInput>;
  name?: Maybe<Scalars['String']>;
  userNotificationPreferences?: Maybe<AccountsUserNotificationPreferencesRelationInput>;
  notifications?: Maybe<AccountsNotificationsRelationInput>;
};

export type Groups_AccountUpdateInput = {
  owner?: Maybe<AccountsOwnerUpdateRelationInput>;
  admins?: Maybe<AccountsAdminsUpdateRelationInput>;
  members?: Maybe<AccountsMembersUpdateRelationInput>;
  groups?: Maybe<AccountsGroupsUpdateRelationInput>;
  name?: Maybe<Scalars['String']>;
  userNotificationPreferences?: Maybe<AccountsUserNotificationPreferencesUpdateRelationInput>;
  notifications?: Maybe<AccountsNotificationsUpdateRelationInput>;
};

export type Groups_UserCreateInput = {
  email: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarRelationInput>;
  carRegistrationNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<UsersRolesRelationInput>;
  notifications?: Maybe<UsersNotificationsRelationInput>;
  adminAccounts?: Maybe<UsersAdminAccountsRelationInput>;
  memberAccounts?: Maybe<UsersMemberAccountsRelationInput>;
  ownedAccounts?: Maybe<UsersOwnedAccountsRelationInput>;
  groups?: Maybe<UsersGroupsRelationInput>;
  notificationPreferences?: Maybe<UsersNotificationPreferencesRelationInput>;
};

export type Groups_UserUpdateInput = {
  filter?: Maybe<UserKeyFilter>;
  data: UserUpdateInput;
};

export type GroupsAccountRelationInput = {
  connect?: Maybe<AccountKeyFilter>;
  create?: Maybe<Groups_AccountCreateInput>;
};

export type GroupsAccountUpdateRelationInput = {
  connect?: Maybe<AccountKeyFilter>;
  reconnect?: Maybe<AccountKeyFilter>;
  create?: Maybe<Groups_AccountCreateInput>;
  update?: Maybe<Groups_AccountUpdateInput>;
};

export type GroupsMembersRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<Groups_UserCreateInput>>>;
};

export type GroupsMembersUpdateRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  disconnect?: Maybe<Array<UserKeyFilter>>;
  reconnect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<Groups_UserCreateInput>>>;
  update?: Maybe<Array<Maybe<Groups_UserUpdateInput>>>;
};

export type GroupSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  account?: Maybe<AccountSort>;
};

export type GroupSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<GroupFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type GroupUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  account?: Maybe<GroupsAccountUpdateRelationInput>;
  members?: Maybe<GroupsMembersUpdateRelationInput>;
};

export type Having = {
  alias?: Maybe<Scalars['String']>;
  id?: Maybe<IdPredicateHaving>;
  string?: Maybe<StringPredicateHaving>;
  int?: Maybe<IntPredicateHaving>;
  bigint?: Maybe<BigIntPredicateHaving>;
  float?: Maybe<FloatPredicateHaving>;
  bool?: Maybe<BoolPredicateHaving>;
  date?: Maybe<DatePredicateHaving>;
  datetime?: Maybe<DateTimePredicateHaving>;
  AND?: Maybe<Array<Having>>;
  OR?: Maybe<Array<Having>>;
};

export type IdPredicate = {
  equals?: Maybe<Scalars['ID']>;
  not_equals?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  not_in?: Maybe<Array<Scalars['ID']>>;
  contains?: Maybe<Scalars['ID']>;
  not_contains?: Maybe<Scalars['ID']>;
  starts_with?: Maybe<Scalars['ID']>;
  not_starts_with?: Maybe<Scalars['ID']>;
  ends_with?: Maybe<Scalars['ID']>;
  not_ends_with?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
};

export type IdPredicateHaving = {
  equals?: Maybe<Scalars['ID']>;
  not_equals?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
  not_in?: Maybe<Array<Scalars['ID']>>;
  contains?: Maybe<Scalars['ID']>;
  not_contains?: Maybe<Scalars['ID']>;
  starts_with?: Maybe<Scalars['ID']>;
  not_starts_with?: Maybe<Scalars['ID']>;
  ends_with?: Maybe<Scalars['ID']>;
  not_ends_with?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  lte?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  gte?: Maybe<Scalars['ID']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<IdPredicateHaving>>;
  OR?: Maybe<Array<IdPredicateHaving>>;
};

export type ImportedTable = {
  __typename?: 'ImportedTable';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type IntPredicate = {
  equals?: Maybe<Scalars['Int']>;
  not_equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  not_in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
};

export type IntPredicateHaving = {
  equals?: Maybe<Scalars['Int']>;
  not_equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  not_in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<IntPredicateHaving>>;
  OR?: Maybe<Array<IntPredicateHaving>>;
};

export type InvitedByName = {
  __typename?: 'InvitedByName';
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  workspaceName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type InviteMembersInput = {
  recipients: Array<InviteRecipientInput>;
};

export type InviteRecipientInput = {
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['ID']>>;
};

export type InvokeData = {
  functionName: Scalars['String'];
  inputArgs?: Maybe<Scalars['String']>;
};

export type InvokeFunctionResponse = {
  __typename?: 'InvokeFunctionResponse';
  responseData: Scalars['String'];
};

export type LocateFunctionArguments = {
  str: Scalars['String'];
  pos?: Maybe<Scalars['Int']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  success?: Maybe<Scalars['Boolean']>;
  auth?: Maybe<Auth>;
  workspaces?: Maybe<Array<WorkspaceInfo>>;
};

export type MemberAccounts_UserCreateInput = {
  email: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarRelationInput>;
  carRegistrationNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<UsersRolesRelationInput>;
  notifications?: Maybe<UsersNotificationsRelationInput>;
  adminAccounts?: Maybe<UsersAdminAccountsRelationInput>;
  memberAccounts?: Maybe<UsersMemberAccountsRelationInput>;
  ownedAccounts?: Maybe<UsersOwnedAccountsRelationInput>;
  groups?: Maybe<UsersGroupsRelationInput>;
  notificationPreferences?: Maybe<UsersNotificationPreferencesRelationInput>;
};

export type MemberAccounts_UserUpdateInput = {
  filter?: Maybe<UserKeyFilter>;
  data: UserUpdateInput;
};

export type Members_AccountCreateInput = {
  owner: AccountsOwnerRelationInput;
  admins?: Maybe<AccountsAdminsRelationInput>;
  members?: Maybe<AccountsMembersRelationInput>;
  groups?: Maybe<AccountsGroupsRelationInput>;
  name?: Maybe<Scalars['String']>;
  userNotificationPreferences?: Maybe<AccountsUserNotificationPreferencesRelationInput>;
  notifications?: Maybe<AccountsNotificationsRelationInput>;
};

export type Members_AccountUpdateInput = {
  filter?: Maybe<AccountKeyFilter>;
  data: AccountUpdateInput;
};

export type Members_GroupCreateInput = {
  name: Scalars['String'];
  account?: Maybe<GroupsAccountRelationInput>;
  members?: Maybe<GroupsMembersRelationInput>;
};

export type Members_GroupUpdateInput = {
  filter?: Maybe<GroupKeyFilter>;
  data: GroupUpdateInput;
};

export type MissingRelation = {
  __typename?: 'MissingRelation';
  table: Scalars['String'];
};

export type MissingRelationFieldTypeAttributes = {
  __typename?: 'MissingRelationFieldTypeAttributes';
  missingTable: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  accountCreate: Account;
  accountCreateMany: AccountManyResponse;
  accountDelete?: Maybe<SuccessResponse>;
  accountUpdate: Account;
  apiTokenCreate: ApiTokenResponse;
  apiTokenDelete?: Maybe<SuccessResponse>;
  apiTokenUpdate: ApiToken;
  applicationDelete?: Maybe<SuccessResponse>;
  applicationInstall?: Maybe<Application>;
  applicationUpdate?: Maybe<Application>;
  authenticationProfileCreate: AuthenticationProfile;
  authenticationProfileCreateMany: AuthenticationProfileManyResponse;
  authenticationProfileDelete?: Maybe<SuccessResponse>;
  authenticationProfileUpdate: AuthenticationProfile;
  authenticationSettingsUpdate: AuthenticationSetting;
  billingDetailsUpdate?: Maybe<BillingDetailsResponse>;
  billingPlanUpdate?: Maybe<BillingCurrentPlanResponse>;
  deploy?: Maybe<Scalars['Boolean']>;
  environmentVariableCreate: EnvironmentVariable;
  environmentVariableCreateMany: EnvironmentVariableManyResponse;
  environmentVariableDelete?: Maybe<SuccessResponse>;
  environmentVariableUpdate: EnvironmentVariable;
  fieldCreate: TableField;
  fieldDelete: SuccessResponse;
  fieldUpdate: TableField;
  fieldUpdatePosition: SuccessResponse;
  fileCreate: File;
  fileCreateMany: FileManyResponse;
  fileDelete?: Maybe<SuccessResponse>;
  fileUpdate: File;
  groupCreate: Group;
  groupCreateMany: GroupManyResponse;
  groupDelete?: Maybe<SuccessResponse>;
  groupUpdate: Group;
  inviteMembers: Array<Maybe<TeamInvitation>>;
  invoke?: Maybe<InvokeFunctionResponse>;
  notificationCreate: Notification;
  notificationCreateMany: NotificationManyResponse;
  notificationDelete?: Maybe<SuccessResponse>;
  notificationPreferenceCreate: NotificationPreference;
  notificationPreferenceCreateMany: NotificationPreferenceManyResponse;
  notificationPreferenceDelete?: Maybe<SuccessResponse>;
  notificationPreferenceUpdate: NotificationPreference;
  notificationUpdate: Notification;
  prepareDeploy: DeployDataResponse;
  roleCreate: Role;
  roleCreateMany: RoleManyResponse;
  roleDelete?: Maybe<SuccessResponse>;
  roleUpdate: Role;
  settingsUpdate: Setting;
  system?: Maybe<SystemMutation>;
  tableCreate: Table;
  tableDelete: SuccessResponse;
  tableUpdate: Table;
  teamInvitationAccept: TeamInvitationAcceptResponse;
  teamInvitationCancel?: Maybe<SuccessResponse>;
  teamInvitationDelete?: Maybe<SuccessResponse>;
  teamInvitationResend?: Maybe<SuccessResponse>;
  teamMemberDelete?: Maybe<SuccessResponse>;
  teamMemberUpdate: TeamMember;
  userCreate: User;
  userCreateMany: UserManyResponse;
  userDelete?: Maybe<SuccessResponse>;
  userLogin?: Maybe<LoginResponse>;
  userRefreshToken?: Maybe<Auth>;
  userSignUp: User;
  userSignUpResend?: Maybe<SuccessResponse>;
  userSignUpWithPassword: User;
  userSignUpWithToken: User;
  userUpdate: User;
  userVerificationEmailResend?: Maybe<SuccessResponse>;
  viewCreate: Table;
  workspaceCreate?: Maybe<WorkspaceCreateResponse>;
  workspaceCreateAsync?: Maybe<WorkspaceCreateResponse>;
  workspaceDelete?: Maybe<SuccessResponse>;
  workspaceLeave?: Maybe<SuccessResponse>;
  workspaceUpdate?: Maybe<WorkspaceUpdateResponse>;
};

export type MutationAccountCreateArgs = {
  data: AccountCreateInput;
};

export type MutationAccountCreateManyArgs = {
  data: Array<Maybe<AccountCreateManyInput>>;
};

export type MutationAccountDeleteArgs = {
  data?: Maybe<AccountDeleteInput>;
  filter?: Maybe<AccountKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationAccountUpdateArgs = {
  data: AccountUpdateInput;
  filter?: Maybe<AccountKeyFilter>;
};

export type MutationApiTokenCreateArgs = {
  data: ApiTokenCreateInput;
};

export type MutationApiTokenDeleteArgs = {
  data?: Maybe<ApiTokenDeleteInput>;
  filter?: Maybe<ApiTokenKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationApiTokenUpdateArgs = {
  data: ApiTokenUpdateInput;
  filter?: Maybe<ApiTokenKeyFilter>;
};

export type MutationApplicationDeleteArgs = {
  data: ApplicationDeleteMutationInput;
};

export type MutationApplicationInstallArgs = {
  data: ApplicationInstallInput;
};

export type MutationApplicationUpdateArgs = {
  data: ApplicationUpdateInput;
};

export type MutationAuthenticationProfileCreateArgs = {
  data: AuthenticationProfileCreateInput;
};

export type MutationAuthenticationProfileCreateManyArgs = {
  data: Array<Maybe<AuthenticationProfileCreateManyInput>>;
};

export type MutationAuthenticationProfileDeleteArgs = {
  data?: Maybe<AuthenticationProfileDeleteInput>;
  filter?: Maybe<AuthenticationProfileKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationAuthenticationProfileUpdateArgs = {
  data: AuthenticationProfileUpdateInput;
  filter?: Maybe<AuthenticationProfileKeyFilter>;
};

export type MutationAuthenticationSettingsUpdateArgs = {
  data: AuthenticationSettingUpdateInput;
};

export type MutationBillingDetailsUpdateArgs = {
  data: BillingDetailsUpdateMutationInput;
};

export type MutationBillingPlanUpdateArgs = {
  data: BillingPlanUpdateMutationInput;
};

export type MutationDeployArgs = {
  data?: Maybe<DeployingBuildInput>;
};

export type MutationEnvironmentVariableCreateArgs = {
  data: EnvironmentVariableCreateInput;
};

export type MutationEnvironmentVariableCreateManyArgs = {
  data: Array<Maybe<EnvironmentVariableCreateManyInput>>;
};

export type MutationEnvironmentVariableDeleteArgs = {
  data?: Maybe<EnvironmentVariableDeleteInput>;
  filter?: Maybe<EnvironmentVariableKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationEnvironmentVariableUpdateArgs = {
  data: EnvironmentVariableUpdateInput;
  filter?: Maybe<EnvironmentVariableKeyFilter>;
};

export type MutationFieldCreateArgs = {
  data: TableFieldCreateInput;
};

export type MutationFieldDeleteArgs = {
  data: TableFieldDeleteInput;
};

export type MutationFieldUpdateArgs = {
  data: TableFieldUpdateInput;
};

export type MutationFieldUpdatePositionArgs = {
  data: TableFieldPositionUpdateInput;
};

export type MutationFileCreateArgs = {
  data: FileCreateInput;
};

export type MutationFileCreateManyArgs = {
  data: Array<Maybe<FileCreateManyInput>>;
};

export type MutationFileDeleteArgs = {
  data?: Maybe<FileDeleteInput>;
  filter?: Maybe<FileKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationFileUpdateArgs = {
  data: FileUpdateInput;
  filter?: Maybe<FileKeyFilter>;
};

export type MutationGroupCreateArgs = {
  data: GroupCreateInput;
};

export type MutationGroupCreateManyArgs = {
  data: Array<Maybe<GroupCreateManyInput>>;
};

export type MutationGroupDeleteArgs = {
  data?: Maybe<GroupDeleteInput>;
  filter?: Maybe<GroupKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationGroupUpdateArgs = {
  data: GroupUpdateInput;
  filter?: Maybe<GroupKeyFilter>;
};

export type MutationInviteMembersArgs = {
  data: InviteMembersInput;
};

export type MutationInvokeArgs = {
  data?: Maybe<InvokeData>;
};

export type MutationNotificationCreateArgs = {
  data: NotificationCreateInput;
};

export type MutationNotificationCreateManyArgs = {
  data: Array<Maybe<NotificationCreateManyInput>>;
};

export type MutationNotificationDeleteArgs = {
  data?: Maybe<NotificationDeleteInput>;
  filter?: Maybe<NotificationKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationNotificationPreferenceCreateArgs = {
  data: NotificationPreferenceCreateInput;
};

export type MutationNotificationPreferenceCreateManyArgs = {
  data: Array<Maybe<NotificationPreferenceCreateManyInput>>;
};

export type MutationNotificationPreferenceDeleteArgs = {
  data?: Maybe<NotificationPreferenceDeleteInput>;
  filter?: Maybe<NotificationPreferenceKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationNotificationPreferenceUpdateArgs = {
  data: NotificationPreferenceUpdateInput;
  filter?: Maybe<NotificationPreferenceKeyFilter>;
};

export type MutationNotificationUpdateArgs = {
  data: NotificationUpdateInput;
  filter?: Maybe<NotificationKeyFilter>;
};

export type MutationRoleCreateArgs = {
  data: RoleCreateInput;
};

export type MutationRoleCreateManyArgs = {
  data: Array<Maybe<RoleCreateManyInput>>;
};

export type MutationRoleDeleteArgs = {
  data?: Maybe<RoleDeleteInput>;
  filter?: Maybe<RoleKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationRoleUpdateArgs = {
  data: RoleUpdateInput;
  filter?: Maybe<RoleKeyFilter>;
};

export type MutationSettingsUpdateArgs = {
  data: SettingUpdateInput;
};

export type MutationTableCreateArgs = {
  data: TableCreateInput;
};

export type MutationTableDeleteArgs = {
  data: TableDeleteInput;
};

export type MutationTableUpdateArgs = {
  data: TableUpdateInput;
};

export type MutationTeamInvitationAcceptArgs = {
  data: TeamInvitationAcceptInput;
};

export type MutationTeamInvitationCancelArgs = {
  data: TeamInvitationCancelInput;
};

export type MutationTeamInvitationDeleteArgs = {
  data?: Maybe<TeamInvitationDeleteInput>;
  filter?: Maybe<TeamInvitationKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationTeamInvitationResendArgs = {
  data: TeamInvitationResendInput;
};

export type MutationTeamMemberDeleteArgs = {
  data?: Maybe<TeamMemberDeleteInput>;
  filter?: Maybe<TeamMemberKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationTeamMemberUpdateArgs = {
  data: TeamMemberUpdateInput;
  filter?: Maybe<TeamMemberKeyFilter>;
};

export type MutationUserCreateArgs = {
  data: UserCreateInput;
};

export type MutationUserCreateManyArgs = {
  data: Array<Maybe<UserCreateManyInput>>;
};

export type MutationUserDeleteArgs = {
  data?: Maybe<UserDeleteInput>;
  filter?: Maybe<UserKeyFilter>;
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationUserLoginArgs = {
  data: UserLoginInput;
};

export type MutationUserRefreshTokenArgs = {
  data: RefreshTokenInput;
};

export type MutationUserSignUpArgs = {
  user: UserCreateInput;
  authProfileId?: Maybe<Scalars['ID']>;
};

export type MutationUserSignUpResendArgs = {
  data: SignUpResendInput;
};

export type MutationUserSignUpWithPasswordArgs = {
  user: UserCreateInput;
  password: Scalars['String'];
  authProfileId?: Maybe<Scalars['ID']>;
};

export type MutationUserSignUpWithTokenArgs = {
  user: UserCreateInput;
  authProfileId?: Maybe<Scalars['ID']>;
};

export type MutationUserUpdateArgs = {
  data: UserUpdateInput;
  filter?: Maybe<UserKeyFilter>;
};

export type MutationUserVerificationEmailResendArgs = {
  data: VerificationEmailResendInput;
  authProfileId?: Maybe<Scalars['ID']>;
};

export type MutationViewCreateArgs = {
  data: ViewCreateInput;
};

export type MutationWorkspaceCreateArgs = {
  data: WorkspaceCreateMutationInput;
};

export type MutationWorkspaceCreateAsyncArgs = {
  data: WorkspaceCreateMutationInput;
};

export type MutationWorkspaceDeleteArgs = {
  data: WorkspaceDeleteMutationInput;
};

export type MutationWorkspaceLeaveArgs = {
  force?: Maybe<Scalars['Boolean']>;
};

export type MutationWorkspaceUpdateArgs = {
  data: WorkspaceUpdateMutationInput;
};

export enum MutationType {
  Create = 'create',
  Update = 'update',
  Delete = 'delete',
}

export type Notification = {
  __typename?: 'Notification';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  text?: Maybe<Scalars['String']>;
  users?: Maybe<UserListResponse>;
  delivered?: Maybe<Scalars['Boolean']>;
  account?: Maybe<Account>;
  _description?: Maybe<Scalars['String']>;
};

export type NotificationUsersArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<Array<Maybe<UserOrderBy>>>;
  sort?: Maybe<Array<UserSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<UserGroupBy>;
};

export type NotificationCreateInput = {
  text?: Maybe<Scalars['String']>;
  users?: Maybe<NotificationsUsersRelationInput>;
  delivered?: Maybe<Scalars['Boolean']>;
  account?: Maybe<NotificationsAccountRelationInput>;
};

export type NotificationCreateManyInput = {
  text?: Maybe<Scalars['String']>;
  delivered?: Maybe<Scalars['Boolean']>;
};

export type NotificationDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type NotificationFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['Boolean']>;
  delivered?: Maybe<Scalars['Boolean']>;
};

export type NotificationFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  text?: Maybe<StringPredicate>;
  delivered?: Maybe<BoolPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  users?: Maybe<UserRelationFilter>;
  account?: Maybe<AccountFilter>;
  AND?: Maybe<Array<NotificationFilter>>;
  OR?: Maybe<Array<NotificationFilter>>;
};

export type NotificationGroupBy = {
  query: NotificationGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type NotificationGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  text?: Maybe<Array<GroupByField>>;
  delivered?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  users?: Maybe<UserGroupByQuery>;
  account?: Maybe<AccountGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type NotificationKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

export type NotificationListResponse = {
  __typename?: 'NotificationListResponse';
  items: Array<Notification>;
  count: Scalars['Int'];
  groups: Array<GroupByResponse>;
};

export type NotificationManyResponse = {
  __typename?: 'NotificationManyResponse';
  items: Array<Notification>;
  count: Scalars['Int'];
};

export enum NotificationOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  DeliveredAsc = 'delivered_ASC',
  DeliveredDesc = 'delivered_DESC',
}

export type NotificationPayload = {
  __typename?: 'NotificationPayload';
  mutation: MutationType;
  node?: Maybe<Notification>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<Notification>;
};

export type NotificationPreference = {
  __typename?: 'NotificationPreference';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  user?: Maybe<User>;
  account?: Maybe<Account>;
  emailEnabled?: Maybe<Scalars['Boolean']>;
  sMSEnabled?: Maybe<Scalars['Boolean']>;
  _description?: Maybe<Scalars['String']>;
};

export type NotificationPreferenceCreateInput = {
  user?: Maybe<NotificationPreferencesUserRelationInput>;
  account?: Maybe<NotificationPreferencesAccountRelationInput>;
  emailEnabled?: Maybe<Scalars['Boolean']>;
  sMSEnabled?: Maybe<Scalars['Boolean']>;
};

export type NotificationPreferenceCreateManyInput = {
  emailEnabled?: Maybe<Scalars['Boolean']>;
  sMSEnabled?: Maybe<Scalars['Boolean']>;
};

export type NotificationPreferenceDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type NotificationPreferenceFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
  emailEnabled?: Maybe<Scalars['Boolean']>;
  sMSEnabled?: Maybe<Scalars['Boolean']>;
};

export type NotificationPreferenceFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  emailEnabled?: Maybe<BoolPredicate>;
  sMSEnabled?: Maybe<BoolPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  user?: Maybe<UserFilter>;
  account?: Maybe<AccountFilter>;
  AND?: Maybe<Array<NotificationPreferenceFilter>>;
  OR?: Maybe<Array<NotificationPreferenceFilter>>;
};

export type NotificationPreferenceGroupBy = {
  query: NotificationPreferenceGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type NotificationPreferenceGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  emailEnabled?: Maybe<Array<GroupByField>>;
  sMSEnabled?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  user?: Maybe<UserGroupByQuery>;
  account?: Maybe<AccountGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type NotificationPreferenceKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

export type NotificationPreferenceListResponse = {
  __typename?: 'NotificationPreferenceListResponse';
  items: Array<NotificationPreference>;
  count: Scalars['Int'];
  groups: Array<GroupByResponse>;
};

export type NotificationPreferenceManyResponse = {
  __typename?: 'NotificationPreferenceManyResponse';
  items: Array<NotificationPreference>;
  count: Scalars['Int'];
};

export enum NotificationPreferenceOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailEnabledAsc = 'emailEnabled_ASC',
  EmailEnabledDesc = 'emailEnabled_DESC',
  SMsEnabledAsc = 'sMSEnabled_ASC',
  SMsEnabledDesc = 'sMSEnabled_DESC',
}

export type NotificationPreferencePayload = {
  __typename?: 'NotificationPreferencePayload';
  mutation: MutationType;
  node?: Maybe<NotificationPreference>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<NotificationPreference>;
};

export type NotificationPreferenceRelationFilter = {
  some?: Maybe<NotificationPreferenceFilter>;
  every?: Maybe<NotificationPreferenceFilter>;
  none?: Maybe<NotificationPreferenceFilter>;
};

export type NotificationPreferences_UserCreateInput = {
  email: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarRelationInput>;
  carRegistrationNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<UsersRolesRelationInput>;
  notifications?: Maybe<UsersNotificationsRelationInput>;
  adminAccounts?: Maybe<UsersAdminAccountsRelationInput>;
  memberAccounts?: Maybe<UsersMemberAccountsRelationInput>;
  ownedAccounts?: Maybe<UsersOwnedAccountsRelationInput>;
  groups?: Maybe<UsersGroupsRelationInput>;
  notificationPreferences?: Maybe<UsersNotificationPreferencesRelationInput>;
};

export type NotificationPreferences_UserUpdateInput = {
  email?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarUpdateRelationInput>;
  carRegistrationNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<UsersRolesUpdateRelationInput>;
  notifications?: Maybe<UsersNotificationsUpdateRelationInput>;
  adminAccounts?: Maybe<UsersAdminAccountsUpdateRelationInput>;
  memberAccounts?: Maybe<UsersMemberAccountsUpdateRelationInput>;
  ownedAccounts?: Maybe<UsersOwnedAccountsUpdateRelationInput>;
  groups?: Maybe<UsersGroupsUpdateRelationInput>;
  notificationPreferences?: Maybe<UsersNotificationPreferencesUpdateRelationInput>;
};

export type NotificationPreferencesAccountRelationInput = {
  connect?: Maybe<AccountKeyFilter>;
  create?: Maybe<UserNotificationPreferences_AccountCreateInput>;
};

export type NotificationPreferencesAccountUpdateRelationInput = {
  connect?: Maybe<AccountKeyFilter>;
  reconnect?: Maybe<AccountKeyFilter>;
  create?: Maybe<UserNotificationPreferences_AccountCreateInput>;
  update?: Maybe<UserNotificationPreferences_AccountUpdateInput>;
};

export type NotificationPreferenceSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  emailEnabled?: Maybe<SortOrder>;
  sMSEnabled?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  user?: Maybe<UserSort>;
  account?: Maybe<AccountSort>;
};

export type NotificationPreferenceSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<NotificationPreferenceFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type NotificationPreferencesUserRelationInput = {
  connect?: Maybe<UserKeyFilter>;
  create?: Maybe<NotificationPreferences_UserCreateInput>;
};

export type NotificationPreferencesUserUpdateRelationInput = {
  connect?: Maybe<UserKeyFilter>;
  reconnect?: Maybe<UserKeyFilter>;
  create?: Maybe<NotificationPreferences_UserCreateInput>;
  update?: Maybe<NotificationPreferences_UserUpdateInput>;
};

export type NotificationPreferenceUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  user?: Maybe<NotificationPreferencesUserUpdateRelationInput>;
  account?: Maybe<NotificationPreferencesAccountUpdateRelationInput>;
  emailEnabled?: Maybe<Scalars['Boolean']>;
  sMSEnabled?: Maybe<Scalars['Boolean']>;
};

export type NotificationRelationFilter = {
  some?: Maybe<NotificationFilter>;
  every?: Maybe<NotificationFilter>;
  none?: Maybe<NotificationFilter>;
};

export type Notifications_AccountCreateInput = {
  owner?: Maybe<AccountsOwnerRelationInput>;
  admins?: Maybe<AccountsAdminsRelationInput>;
  members?: Maybe<AccountsMembersRelationInput>;
  groups?: Maybe<AccountsGroupsRelationInput>;
  name?: Maybe<Scalars['String']>;
  userNotificationPreferences?: Maybe<AccountsUserNotificationPreferencesRelationInput>;
  notifications?: Maybe<AccountsNotificationsRelationInput>;
};

export type Notifications_AccountUpdateInput = {
  owner?: Maybe<AccountsOwnerUpdateRelationInput>;
  admins?: Maybe<AccountsAdminsUpdateRelationInput>;
  members?: Maybe<AccountsMembersUpdateRelationInput>;
  groups?: Maybe<AccountsGroupsUpdateRelationInput>;
  name?: Maybe<Scalars['String']>;
  userNotificationPreferences?: Maybe<AccountsUserNotificationPreferencesUpdateRelationInput>;
  notifications?: Maybe<AccountsNotificationsUpdateRelationInput>;
};

export type Notifications_UserCreateInput = {
  email: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarRelationInput>;
  carRegistrationNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<UsersRolesRelationInput>;
  notifications?: Maybe<UsersNotificationsRelationInput>;
  adminAccounts?: Maybe<UsersAdminAccountsRelationInput>;
  memberAccounts?: Maybe<UsersMemberAccountsRelationInput>;
  ownedAccounts?: Maybe<UsersOwnedAccountsRelationInput>;
  groups?: Maybe<UsersGroupsRelationInput>;
  notificationPreferences?: Maybe<UsersNotificationPreferencesRelationInput>;
};

export type Notifications_UserUpdateInput = {
  filter?: Maybe<UserKeyFilter>;
  data: UserUpdateInput;
};

export type NotificationsAccountRelationInput = {
  connect?: Maybe<AccountKeyFilter>;
  create?: Maybe<Notifications_AccountCreateInput>;
};

export type NotificationsAccountUpdateRelationInput = {
  connect?: Maybe<AccountKeyFilter>;
  reconnect?: Maybe<AccountKeyFilter>;
  create?: Maybe<Notifications_AccountCreateInput>;
  update?: Maybe<Notifications_AccountUpdateInput>;
};

export type NotificationSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  text?: Maybe<SortOrder>;
  delivered?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  account?: Maybe<AccountSort>;
};

export type NotificationSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<NotificationFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type NotificationsUsersRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<Notifications_UserCreateInput>>>;
};

export type NotificationsUsersUpdateRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  disconnect?: Maybe<Array<UserKeyFilter>>;
  reconnect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<Notifications_UserCreateInput>>>;
  update?: Maybe<Array<Maybe<Notifications_UserUpdateInput>>>;
};

export type NotificationUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  users?: Maybe<NotificationsUsersUpdateRelationInput>;
  delivered?: Maybe<Scalars['Boolean']>;
  account?: Maybe<NotificationsAccountUpdateRelationInput>;
};

export type NumberFieldTypeAttributes = {
  __typename?: 'NumberFieldTypeAttributes';
  format: Scalars['String'];
  precision?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  minValue?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  isBigInt?: Maybe<Scalars['Boolean']>;
};

export enum NumberTypeFormatEnum {
  Number = 'NUMBER',
  Currency = 'CURRENCY',
  Percentage = 'PERCENTAGE',
  Fraction = 'FRACTION',
  Scientific = 'SCIENTIFIC',
}

export type OwnedAccounts_UserCreateInput = {
  email: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarRelationInput>;
  carRegistrationNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<UsersRolesRelationInput>;
  notifications?: Maybe<UsersNotificationsRelationInput>;
  adminAccounts?: Maybe<UsersAdminAccountsRelationInput>;
  memberAccounts?: Maybe<UsersMemberAccountsRelationInput>;
  ownedAccounts?: Maybe<UsersOwnedAccountsRelationInput>;
  groups?: Maybe<UsersGroupsRelationInput>;
  notificationPreferences?: Maybe<UsersNotificationPreferencesRelationInput>;
};

export type OwnedAccounts_UserUpdateInput = {
  email?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarUpdateRelationInput>;
  carRegistrationNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<UsersRolesUpdateRelationInput>;
  notifications?: Maybe<UsersNotificationsUpdateRelationInput>;
  adminAccounts?: Maybe<UsersAdminAccountsUpdateRelationInput>;
  memberAccounts?: Maybe<UsersMemberAccountsUpdateRelationInput>;
  ownedAccounts?: Maybe<UsersOwnedAccountsUpdateRelationInput>;
  groups?: Maybe<UsersGroupsUpdateRelationInput>;
  notificationPreferences?: Maybe<UsersNotificationPreferencesUpdateRelationInput>;
};

export type Owner_AccountCreateInput = {
  owner?: Maybe<AccountsOwnerRelationInput>;
  admins?: Maybe<AccountsAdminsRelationInput>;
  members?: Maybe<AccountsMembersRelationInput>;
  groups?: Maybe<AccountsGroupsRelationInput>;
  name?: Maybe<Scalars['String']>;
  userNotificationPreferences?: Maybe<AccountsUserNotificationPreferencesRelationInput>;
  notifications?: Maybe<AccountsNotificationsRelationInput>;
};

export type Owner_AccountUpdateInput = {
  filter?: Maybe<AccountKeyFilter>;
  data: AccountUpdateInput;
};

export type PatternFunctionArguments = {
  pattern: Scalars['String'];
  escape?: Maybe<Scalars['String']>;
};

export type Permission = {
  __typename?: 'Permission';
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  appId?: Maybe<Scalars['String']>;
  resourceType?: Maybe<Scalars['String']>;
  resource?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['JSON']>;
  role?: Maybe<Role>;
  _description?: Maybe<Scalars['String']>;
};

export type PermissionFilter = {
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  appId?: Maybe<StringPredicate>;
  resourceType?: Maybe<StringPredicate>;
  resource?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  role?: Maybe<RoleFilter>;
  AND?: Maybe<Array<PermissionFilter>>;
  OR?: Maybe<Array<PermissionFilter>>;
};

export type PermissionGroupByQuery = {
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  appId?: Maybe<Array<GroupByField>>;
  resourceType?: Maybe<Array<GroupByField>>;
  resource?: Maybe<Array<GroupByField>>;
  permission?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  role?: Maybe<RoleGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type PermissionInputFilter = {
  resourceType?: Maybe<PermissionResourceTypeEnum>;
  action?: Maybe<Scalars['String']>;
  resource?: Maybe<Scalars['String']>;
  applicationName?: Maybe<Scalars['String']>;
};

export type PermissionListResponse = {
  __typename?: 'PermissionListResponse';
  items: Array<Permission>;
  count: Scalars['Int'];
  groups: Array<GroupByResponse>;
};

export type PermissionPayload = {
  __typename?: 'PermissionPayload';
  mutation: MutationType;
  node?: Maybe<Permission>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<Permission>;
};

export type PermissionRelationFilter = {
  some?: Maybe<PermissionFilter>;
  every?: Maybe<PermissionFilter>;
  none?: Maybe<PermissionFilter>;
};

export enum PermissionResourceTypeEnum {
  Data = 'data',
  Custom = 'custom',
}

export type PermissionsCustom = {
  data?: Maybe<PermissionsCustomData>;
  logic?: Maybe<PermissionsCustomLogic>;
  users?: Maybe<PermissionsCustomUsers>;
  settings?: Maybe<PermissionsCustomSettings>;
};

export type PermissionsCustomData = {
  schemaManagement?: Maybe<PermissionsCustomDataSchemaManagement>;
  viewerAccess?: Maybe<PermissionsCustomDataViewerAccess>;
};

export type PermissionsCustomDataSchemaManagement = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomDataViewerAccess = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomLogic = {
  view?: Maybe<PermissionsCustomLogicView>;
  deploy?: Maybe<PermissionsCustomLogicDeploy>;
  invoke?: Maybe<PermissionsCustomLogicInvoke>;
  logs?: Maybe<PermissionsCustomLogicLogs>;
};

export type PermissionsCustomLogicDeploy = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomLogicInvoke = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomLogicLogs = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomLogicView = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomSettings = {
  workspaceAdministration?: Maybe<PermissionsCustomSettingsWorkspaceAdministration>;
};

export type PermissionsCustomSettingsWorkspaceAdministration = {
  allow: Scalars['Boolean'];
};

export type PermissionsCustomUsers = {
  teamAdministration?: Maybe<PermissionsCustomUsersTeamAdministration>;
};

export type PermissionsCustomUsersTeamAdministration = {
  allow: Scalars['Boolean'];
};

export type PermissionsData = {
  Users?: Maybe<PermissionsDataUsers>;
  Files?: Maybe<PermissionsDataFiles>;
  Roles?: Maybe<PermissionsDataRoles>;
  Groups?: Maybe<PermissionsDataGroups>;
  Notifications?: Maybe<PermissionsDataNotifications>;
  Accounts?: Maybe<PermissionsDataAccounts>;
  NotificationPreferences?: Maybe<PermissionsDataNotificationPreferences>;
};

export type PermissionsDataAccounts = {
  create?: Maybe<PermissionsDataAccountsCreate>;
  read?: Maybe<PermissionsDataAccountsRead>;
  update?: Maybe<PermissionsDataAccountsUpdate>;
  delete?: Maybe<PermissionsDataAccountsDelete>;
};

export type PermissionsDataAccountsCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataAccountsDelete = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataAccountsRead = {
  allow: Scalars['Boolean'];
  filter?: Maybe<AccountFilter>;
  fields?: Maybe<AccountFieldsPermissions>;
};

export type PermissionsDataAccountsUpdate = {
  allow: Scalars['Boolean'];
  filter?: Maybe<AccountFilter>;
  fields?: Maybe<AccountFieldsPermissions>;
};

export type PermissionsDataFiles = {
  create?: Maybe<PermissionsDataFilesCreate>;
  read?: Maybe<PermissionsDataFilesRead>;
  update?: Maybe<PermissionsDataFilesUpdate>;
  delete?: Maybe<PermissionsDataFilesDelete>;
};

export type PermissionsDataFilesCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataFilesDelete = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataFilesRead = {
  allow: Scalars['Boolean'];
  filter?: Maybe<FileFilter>;
  fields?: Maybe<FileFieldsPermissions>;
};

export type PermissionsDataFilesUpdate = {
  allow: Scalars['Boolean'];
  filter?: Maybe<FileFilter>;
  fields?: Maybe<FileFieldsPermissions>;
};

export type PermissionsDataGroups = {
  create?: Maybe<PermissionsDataGroupsCreate>;
  read?: Maybe<PermissionsDataGroupsRead>;
  update?: Maybe<PermissionsDataGroupsUpdate>;
  delete?: Maybe<PermissionsDataGroupsDelete>;
};

export type PermissionsDataGroupsCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataGroupsDelete = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataGroupsRead = {
  allow: Scalars['Boolean'];
  filter?: Maybe<GroupFilter>;
  fields?: Maybe<GroupFieldsPermissions>;
};

export type PermissionsDataGroupsUpdate = {
  allow: Scalars['Boolean'];
  filter?: Maybe<GroupFilter>;
  fields?: Maybe<GroupFieldsPermissions>;
};

export type PermissionsDataNotificationPreferences = {
  create?: Maybe<PermissionsDataNotificationPreferencesCreate>;
  read?: Maybe<PermissionsDataNotificationPreferencesRead>;
  update?: Maybe<PermissionsDataNotificationPreferencesUpdate>;
  delete?: Maybe<PermissionsDataNotificationPreferencesDelete>;
};

export type PermissionsDataNotificationPreferencesCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataNotificationPreferencesDelete = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataNotificationPreferencesRead = {
  allow: Scalars['Boolean'];
  filter?: Maybe<NotificationPreferenceFilter>;
  fields?: Maybe<NotificationPreferenceFieldsPermissions>;
};

export type PermissionsDataNotificationPreferencesUpdate = {
  allow: Scalars['Boolean'];
  filter?: Maybe<NotificationPreferenceFilter>;
  fields?: Maybe<NotificationPreferenceFieldsPermissions>;
};

export type PermissionsDataNotifications = {
  create?: Maybe<PermissionsDataNotificationsCreate>;
  read?: Maybe<PermissionsDataNotificationsRead>;
  update?: Maybe<PermissionsDataNotificationsUpdate>;
  delete?: Maybe<PermissionsDataNotificationsDelete>;
};

export type PermissionsDataNotificationsCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataNotificationsDelete = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataNotificationsRead = {
  allow: Scalars['Boolean'];
  filter?: Maybe<NotificationFilter>;
  fields?: Maybe<NotificationFieldsPermissions>;
};

export type PermissionsDataNotificationsUpdate = {
  allow: Scalars['Boolean'];
  filter?: Maybe<NotificationFilter>;
  fields?: Maybe<NotificationFieldsPermissions>;
};

export type PermissionsDataRoles = {
  create?: Maybe<PermissionsDataRolesCreate>;
  read?: Maybe<PermissionsDataRolesRead>;
  update?: Maybe<PermissionsDataRolesUpdate>;
  delete?: Maybe<PermissionsDataRolesDelete>;
};

export type PermissionsDataRolesCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataRolesDelete = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataRolesRead = {
  allow: Scalars['Boolean'];
  filter?: Maybe<RoleFilter>;
  fields?: Maybe<RoleFieldsPermissions>;
};

export type PermissionsDataRolesUpdate = {
  allow: Scalars['Boolean'];
  filter?: Maybe<RoleFilter>;
  fields?: Maybe<RoleFieldsPermissions>;
};

export type PermissionsDataUsers = {
  create?: Maybe<PermissionsDataUsersCreate>;
  read?: Maybe<PermissionsDataUsersRead>;
  update?: Maybe<PermissionsDataUsersUpdate>;
  delete?: Maybe<PermissionsDataUsersDelete>;
};

export type PermissionsDataUsersCreate = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataUsersDelete = {
  allow: Scalars['Boolean'];
};

export type PermissionsDataUsersRead = {
  allow: Scalars['Boolean'];
  filter?: Maybe<UserFilter>;
  fields?: Maybe<UserFieldsPermissions>;
};

export type PermissionsDataUsersUpdate = {
  allow: Scalars['Boolean'];
  filter?: Maybe<UserFilter>;
  fields?: Maybe<UserFieldsPermissions>;
};

export type PermissionsInput = {
  data?: Maybe<PermissionsData>;
  custom?: Maybe<PermissionsCustom>;
};

export type PermissionSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<PermissionFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accountsList: AccountListResponse;
  apiToken?: Maybe<ApiToken>;
  apiTokensList: ApiTokenListResponse;
  application?: Maybe<Application>;
  applicationsList?: Maybe<ApplicationListResponse>;
  authenticationProfile?: Maybe<AuthenticationProfile>;
  authenticationProfilesList: AuthenticationProfileListResponse;
  authenticationSettings?: Maybe<AuthenticationSetting>;
  billingCurrentPlan?: Maybe<BillingCurrentPlanResponse>;
  billingDetails?: Maybe<BillingDetailsResponse>;
  billingInvoicesList: BillingInvoicesListResponse;
  billingMetricUsageQuotasList: BillingMetricUsageQuotasListResponse;
  billingMetricUsagesList: BillingMetricUsagesListResponse;
  companyName?: Maybe<Scalars['String']>;
  deployStatus: DeployStatusResult;
  environmentVariable?: Maybe<EnvironmentVariable>;
  environmentVariablesList: EnvironmentVariableListResponse;
  file?: Maybe<File>;
  fileUploadInfo?: Maybe<FileUploadInfoResponse>;
  filesList: FileListResponse;
  functionsList?: Maybe<FunctionListResponse>;
  group?: Maybe<Group>;
  groupsList: GroupListResponse;
  logs?: Maybe<Array<Maybe<Scalars['String']>>>;
  notification?: Maybe<Notification>;
  notificationPreference?: Maybe<NotificationPreference>;
  notificationPreferencesList: NotificationPreferenceListResponse;
  notificationsList: NotificationListResponse;
  role?: Maybe<Role>;
  rolesList: RoleListResponse;
  settings?: Maybe<Setting>;
  system?: Maybe<SystemQuery>;
  table?: Maybe<Table>;
  tableField?: Maybe<TableField>;
  tablesList: TableListResponse;
  teamInvitationDetails?: Maybe<TeamInvitationDetails>;
  teamInvitationsDetailsList?: Maybe<TeamInvitationsDetailsList>;
  teamMember?: Maybe<TeamMember>;
  teamMembersList: TeamMemberListResponse;
  user?: Maybe<User>;
  userBillingConfiguration: UserBillingConfigurationResponse;
  userInvitationsList?: Maybe<UserInvitationList>;
  usersList: UserListResponse;
  workspacesList?: Maybe<WorkspaceListResponse>;
};

export type QueryAccountArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryAccountsListArgs = {
  filter?: Maybe<AccountFilter>;
  orderBy?: Maybe<Array<Maybe<AccountOrderBy>>>;
  sort?: Maybe<Array<AccountSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AccountGroupBy>;
};

export type QueryApiTokenArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type QueryApiTokensListArgs = {
  filter?: Maybe<ApiTokenFilter>;
  orderBy?: Maybe<Array<Maybe<ApiTokenOrderBy>>>;
  sort?: Maybe<Array<ApiTokenSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<ApiTokenGroupBy>;
};

export type QueryApplicationArgs = {
  id: Scalars['String'];
};

export type QueryAuthenticationProfileArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type QueryAuthenticationProfilesListArgs = {
  filter?: Maybe<AuthenticationProfileFilter>;
  orderBy?: Maybe<Array<Maybe<AuthenticationProfileOrderBy>>>;
  sort?: Maybe<Array<AuthenticationProfileSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AuthenticationProfileGroupBy>;
};

export type QueryBillingInvoicesListArgs = {
  by?: Maybe<BillingInvoicesListFilterType>;
  limit?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type QueryBillingMetricUsagesListArgs = {
  filter?: Maybe<BillingMetricUsagesListFilter>;
};

export type QueryDeployStatusArgs = {
  buildName: Scalars['String'];
};

export type QueryEnvironmentVariableArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type QueryEnvironmentVariablesListArgs = {
  filter?: Maybe<EnvironmentVariableFilter>;
  orderBy?: Maybe<Array<Maybe<EnvironmentVariableOrderBy>>>;
  sort?: Maybe<Array<EnvironmentVariableSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<EnvironmentVariableGroupBy>;
};

export type QueryFileArgs = {
  id?: Maybe<Scalars['ID']>;
  fileId?: Maybe<Scalars['String']>;
};

export type QueryFilesListArgs = {
  filter?: Maybe<FileFilter>;
  orderBy?: Maybe<Array<Maybe<FileOrderBy>>>;
  sort?: Maybe<Array<FileSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<FileGroupBy>;
};

export type QueryFunctionsListArgs = {
  applicationId?: Maybe<Scalars['String']>;
  filter?: Maybe<FunctionInfoFilter>;
  orderBy?: Maybe<Array<Maybe<FunctionInfoOrderBy>>>;
};

export type QueryGroupArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryGroupsListArgs = {
  filter?: Maybe<GroupFilter>;
  orderBy?: Maybe<Array<Maybe<GroupOrderBy>>>;
  sort?: Maybe<Array<GroupSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<GroupGroupBy>;
};

export type QueryLogsArgs = {
  functionName: Scalars['String'];
  applicationId?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
};

export type QueryNotificationArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryNotificationPreferenceArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryNotificationPreferencesListArgs = {
  filter?: Maybe<NotificationPreferenceFilter>;
  orderBy?: Maybe<Array<Maybe<NotificationPreferenceOrderBy>>>;
  sort?: Maybe<Array<NotificationPreferenceSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<NotificationPreferenceGroupBy>;
};

export type QueryNotificationsListArgs = {
  filter?: Maybe<NotificationFilter>;
  orderBy?: Maybe<Array<Maybe<NotificationOrderBy>>>;
  sort?: Maybe<Array<NotificationSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<NotificationGroupBy>;
};

export type QueryRoleArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type QueryRolesListArgs = {
  filter?: Maybe<RoleFilter>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  sort?: Maybe<Array<RoleSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
};

export type QueryTableArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type QueryTableFieldArgs = {
  id: Scalars['ID'];
};

export type QueryTablesListArgs = {
  filter?: Maybe<TableListFilter>;
};

export type QueryTeamInvitationDetailsArgs = {
  uuid: Scalars['String'];
};

export type QueryTeamMemberArgs = {
  id?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['ID']>;
};

export type QueryTeamMembersListArgs = {
  filter?: Maybe<TeamMemberFilter>;
  orderBy?: Maybe<Array<Maybe<TeamMemberOrderBy>>>;
  sort?: Maybe<Array<TeamMemberSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<TeamMemberGroupBy>;
};

export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};

export type QueryUsersListArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<Array<Maybe<UserOrderBy>>>;
  sort?: Maybe<Array<UserSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<UserGroupBy>;
};

export type RefreshTokenInput = {
  email?: Maybe<Scalars['String']>;
  refreshToken: Scalars['String'];
  authProfileId?: Maybe<Scalars['ID']>;
};

export type Relation = {
  __typename?: 'Relation';
  refTable: Table;
  refField?: Maybe<TableField>;
  relationTableName: Scalars['String'];
  relationFieldName?: Maybe<Scalars['String']>;
  refFieldName?: Maybe<Scalars['String']>;
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList?: Maybe<Scalars['Boolean']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']>;
};

export type RelationCreateInput = {
  refTableId: Scalars['ID'];
  refFieldName?: Maybe<Scalars['String']>;
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList: Scalars['Boolean'];
  refFieldIsRequired: Scalars['Boolean'];
};

export type RelationUpdateInput = {
  refTableId?: Maybe<Scalars['ID']>;
  refFieldName?: Maybe<Scalars['String']>;
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList?: Maybe<Scalars['Boolean']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']>;
};

export type ReplaceFunctionArguments = {
  from: Scalars['String'];
  to: Scalars['String'];
};

export type Role = {
  __typename?: 'Role';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  users?: Maybe<UserListResponse>;
  apiTokens?: Maybe<ApiTokenListResponse>;
  authenticationProfiles?: Maybe<AuthenticationProfileListResponse>;
  teamMembers?: Maybe<TeamMemberListResponse>;
  permissions?: Maybe<PermissionListResponse>;
  _description?: Maybe<Scalars['String']>;
};

export type RoleUsersArgs = {
  filter?: Maybe<UserFilter>;
  orderBy?: Maybe<Array<Maybe<UserOrderBy>>>;
  sort?: Maybe<Array<UserSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<UserGroupBy>;
};

export type RoleApiTokensArgs = {
  filter?: Maybe<ApiTokenFilter>;
  orderBy?: Maybe<Array<Maybe<ApiTokenOrderBy>>>;
  sort?: Maybe<Array<ApiTokenSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<ApiTokenGroupBy>;
};

export type RoleAuthenticationProfilesArgs = {
  filter?: Maybe<AuthenticationProfileFilter>;
  orderBy?: Maybe<Array<Maybe<AuthenticationProfileOrderBy>>>;
  sort?: Maybe<Array<AuthenticationProfileSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AuthenticationProfileGroupBy>;
};

export type RoleTeamMembersArgs = {
  filter?: Maybe<TeamMemberFilter>;
  orderBy?: Maybe<Array<Maybe<TeamMemberOrderBy>>>;
  sort?: Maybe<Array<TeamMemberSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<TeamMemberGroupBy>;
};

export type RolePermissionsArgs = {
  filter?: Maybe<PermissionInputFilter>;
};

export type RoleCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  users?: Maybe<RolesUsersRelationInput>;
  permissions?: Maybe<PermissionsInput>;
  apiTokens?: Maybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesRelationInput>;
  teamMembers?: Maybe<RolesTeamMembersRelationInput>;
};

export type RoleCreateManyInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type RoleDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type RoleFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['Boolean']>;
};

export type RoleFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  name?: Maybe<StringPredicate>;
  description?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  users?: Maybe<UserRelationFilter>;
  permissions?: Maybe<PermissionRelationFilter>;
  apiTokens?: Maybe<ApiTokenRelationFilter>;
  authenticationProfiles?: Maybe<AuthenticationProfileRelationFilter>;
  teamMembers?: Maybe<TeamMemberRelationFilter>;
  AND?: Maybe<Array<RoleFilter>>;
  OR?: Maybe<Array<RoleFilter>>;
};

export type RoleGroupBy = {
  query: RoleGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type RoleGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  name?: Maybe<Array<GroupByField>>;
  description?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  users?: Maybe<UserGroupByQuery>;
  permissions?: Maybe<PermissionGroupByQuery>;
  apiTokens?: Maybe<ApiTokenGroupByQuery>;
  authenticationProfiles?: Maybe<AuthenticationProfileGroupByQuery>;
  teamMembers?: Maybe<TeamMemberGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type RoleKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type RoleListResponse = {
  __typename?: 'RoleListResponse';
  items: Array<Role>;
  count: Scalars['Int'];
  groups: Array<GroupByResponse>;
};

export type RoleManyResponse = {
  __typename?: 'RoleManyResponse';
  items: Array<Role>;
  count: Scalars['Int'];
};

export enum RoleOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SystemTypeAsc = 'systemType_ASC',
  SystemTypeDesc = 'systemType_DESC',
}

export type RolePayload = {
  __typename?: 'RolePayload';
  mutation: MutationType;
  node?: Maybe<Role>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<Role>;
};

export type RoleRelationFilter = {
  some?: Maybe<RoleFilter>;
  every?: Maybe<RoleFilter>;
  none?: Maybe<RoleFilter>;
};

export type Roles_ApiTokenUpdateInput = {
  filter?: Maybe<ApiTokenKeyFilter>;
  data: ApiTokenUpdateInput;
};

export type Roles_AuthenticationProfileCreateInput = {
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
  secret?: Maybe<Scalars['String']>;
  managementDomain?: Maybe<Scalars['String']>;
  clientId?: Maybe<Scalars['String']>;
  databaseName?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  selfSignUpEnabled?: Maybe<Scalars['Boolean']>;
  selfSignUpEmailDomains?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<AuthenticationProfilesRolesRelationInput>;
  audiences?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Roles_AuthenticationProfileUpdateInput = {
  filter?: Maybe<AuthenticationProfileKeyFilter>;
  data: AuthenticationProfileUpdateInput;
};

export type Roles_TeamMemberUpdateInput = {
  filter?: Maybe<TeamMemberKeyFilter>;
  data: TeamMemberUpdateInput;
};

export type Roles_UserCreateInput = {
  email: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarRelationInput>;
  carRegistrationNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<UsersRolesRelationInput>;
  notifications?: Maybe<UsersNotificationsRelationInput>;
  adminAccounts?: Maybe<UsersAdminAccountsRelationInput>;
  memberAccounts?: Maybe<UsersMemberAccountsRelationInput>;
  ownedAccounts?: Maybe<UsersOwnedAccountsRelationInput>;
  groups?: Maybe<UsersGroupsRelationInput>;
  notificationPreferences?: Maybe<UsersNotificationPreferencesRelationInput>;
};

export type Roles_UserUpdateInput = {
  filter?: Maybe<UserKeyFilter>;
  data: UserUpdateInput;
};

export type RolesApiTokensRelationInput = {
  connect?: Maybe<Array<ApiTokenKeyFilter>>;
};

export type RolesApiTokensUpdateRelationInput = {
  connect?: Maybe<Array<ApiTokenKeyFilter>>;
  disconnect?: Maybe<Array<ApiTokenKeyFilter>>;
  reconnect?: Maybe<Array<ApiTokenKeyFilter>>;
  update?: Maybe<Array<Maybe<Roles_ApiTokenUpdateInput>>>;
};

export type RolesAuthenticationProfilesRelationInput = {
  connect?: Maybe<Array<AuthenticationProfileKeyFilter>>;
  create?: Maybe<Array<Maybe<Roles_AuthenticationProfileCreateInput>>>;
};

export type RolesAuthenticationProfilesUpdateRelationInput = {
  connect?: Maybe<Array<AuthenticationProfileKeyFilter>>;
  disconnect?: Maybe<Array<AuthenticationProfileKeyFilter>>;
  reconnect?: Maybe<Array<AuthenticationProfileKeyFilter>>;
  create?: Maybe<Array<Maybe<Roles_AuthenticationProfileCreateInput>>>;
  update?: Maybe<Array<Maybe<Roles_AuthenticationProfileUpdateInput>>>;
};

export type RoleSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
};

export type RolesTeamMembersRelationInput = {
  connect?: Maybe<Array<TeamMemberKeyFilter>>;
};

export type RolesTeamMembersUpdateRelationInput = {
  connect?: Maybe<Array<TeamMemberKeyFilter>>;
  disconnect?: Maybe<Array<TeamMemberKeyFilter>>;
  reconnect?: Maybe<Array<TeamMemberKeyFilter>>;
  update?: Maybe<Array<Maybe<Roles_TeamMemberUpdateInput>>>;
};

export type RoleSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<RoleFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type RolesUsersRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<Roles_UserCreateInput>>>;
};

export type RolesUsersUpdateRelationInput = {
  connect?: Maybe<Array<UserKeyFilter>>;
  disconnect?: Maybe<Array<UserKeyFilter>>;
  reconnect?: Maybe<Array<UserKeyFilter>>;
  create?: Maybe<Array<Maybe<Roles_UserCreateInput>>>;
  update?: Maybe<Array<Maybe<Roles_UserUpdateInput>>>;
};

export type RoleUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  users?: Maybe<RolesUsersUpdateRelationInput>;
  permissions?: Maybe<PermissionsInput>;
  apiTokens?: Maybe<RolesApiTokensUpdateRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesUpdateRelationInput>;
  teamMembers?: Maybe<RolesTeamMembersUpdateRelationInput>;
};

export type SchemaOrigin = {
  __typename?: 'SchemaOrigin';
  type: SchemaOriginType;
  provider?: Maybe<Scalars['String']>;
};

export enum SchemaOriginType {
  Remote = 'REMOTE',
  Local = 'LOCAL',
  View = 'VIEW',
}

export type Setting = {
  __typename?: 'Setting';
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  passwordMinLength?: Maybe<Scalars['Int']>;
  passwordRequireNumbers?: Maybe<Scalars['Boolean']>;
  passwordRequireSpecial?: Maybe<Scalars['Boolean']>;
  passwordRequireUppercase?: Maybe<Scalars['Boolean']>;
  passwordRequireLowercase?: Maybe<Scalars['Boolean']>;
  passwordUpdateInterval?: Maybe<Scalars['Int']>;
  rememberDevice?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  menuBarLogo?: Maybe<File>;
  landingPageImage?: Maybe<File>;
  vanityUrl?: Maybe<Scalars['String']>;
  buttonLinkColor?: Maybe<Scalars['String']>;
  userInterfaceStyle?: Maybe<Scalars['String']>;
  menuBarBGColor?: Maybe<Scalars['String']>;
  menuBarIconsColor?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  containerColor?: Maybe<Scalars['String']>;
  leftNavColor?: Maybe<Scalars['String']>;
  _description?: Maybe<Scalars['String']>;
};

export type SettingFilter = {
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  passwordMinLength?: Maybe<IntPredicate>;
  passwordRequireNumbers?: Maybe<BoolPredicate>;
  passwordRequireSpecial?: Maybe<BoolPredicate>;
  passwordRequireUppercase?: Maybe<BoolPredicate>;
  passwordRequireLowercase?: Maybe<BoolPredicate>;
  passwordUpdateInterval?: Maybe<IntPredicate>;
  rememberDevice?: Maybe<StringPredicate>;
  language?: Maybe<StringPredicate>;
  dateFormat?: Maybe<StringPredicate>;
  currency?: Maybe<StringPredicate>;
  timezone?: Maybe<StringPredicate>;
  vanityUrl?: Maybe<StringPredicate>;
  buttonLinkColor?: Maybe<StringPredicate>;
  userInterfaceStyle?: Maybe<StringPredicate>;
  menuBarBGColor?: Maybe<StringPredicate>;
  menuBarIconsColor?: Maybe<StringPredicate>;
  bgColor?: Maybe<StringPredicate>;
  containerColor?: Maybe<StringPredicate>;
  leftNavColor?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  menuBarLogo?: Maybe<FileFilter>;
  landingPageImage?: Maybe<FileFilter>;
  AND?: Maybe<Array<SettingFilter>>;
  OR?: Maybe<Array<SettingFilter>>;
};

export type SettingGroupBy = {
  query: SettingGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type SettingGroupByQuery = {
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  passwordMinLength?: Maybe<Array<GroupByField>>;
  passwordRequireNumbers?: Maybe<Array<GroupByField>>;
  passwordRequireSpecial?: Maybe<Array<GroupByField>>;
  passwordRequireUppercase?: Maybe<Array<GroupByField>>;
  passwordRequireLowercase?: Maybe<Array<GroupByField>>;
  passwordUpdateInterval?: Maybe<Array<GroupByField>>;
  rememberDevice?: Maybe<Array<GroupByField>>;
  language?: Maybe<Array<GroupByField>>;
  dateFormat?: Maybe<Array<GroupByField>>;
  currency?: Maybe<Array<GroupByField>>;
  timezone?: Maybe<Array<GroupByField>>;
  vanityUrl?: Maybe<Array<GroupByField>>;
  buttonLinkColor?: Maybe<Array<GroupByField>>;
  userInterfaceStyle?: Maybe<Array<GroupByField>>;
  menuBarBGColor?: Maybe<Array<GroupByField>>;
  menuBarIconsColor?: Maybe<Array<GroupByField>>;
  bgColor?: Maybe<Array<GroupByField>>;
  containerColor?: Maybe<Array<GroupByField>>;
  leftNavColor?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  menuBarLogo?: Maybe<FileGroupByQuery>;
  landingPageImage?: Maybe<FileGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type SettingListResponse = {
  __typename?: 'SettingListResponse';
  items: Array<Setting>;
  count: Scalars['Int'];
  groups: Array<GroupByResponse>;
};

export enum SettingOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  PasswordMinLengthAsc = 'passwordMinLength_ASC',
  PasswordMinLengthDesc = 'passwordMinLength_DESC',
  PasswordRequireNumbersAsc = 'passwordRequireNumbers_ASC',
  PasswordRequireNumbersDesc = 'passwordRequireNumbers_DESC',
  PasswordRequireSpecialAsc = 'passwordRequireSpecial_ASC',
  PasswordRequireSpecialDesc = 'passwordRequireSpecial_DESC',
  PasswordRequireUppercaseAsc = 'passwordRequireUppercase_ASC',
  PasswordRequireUppercaseDesc = 'passwordRequireUppercase_DESC',
  PasswordRequireLowercaseAsc = 'passwordRequireLowercase_ASC',
  PasswordRequireLowercaseDesc = 'passwordRequireLowercase_DESC',
  PasswordUpdateIntervalAsc = 'passwordUpdateInterval_ASC',
  PasswordUpdateIntervalDesc = 'passwordUpdateInterval_DESC',
  RememberDeviceAsc = 'rememberDevice_ASC',
  RememberDeviceDesc = 'rememberDevice_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  DateFormatAsc = 'dateFormat_ASC',
  DateFormatDesc = 'dateFormat_DESC',
  CurrencyAsc = 'currency_ASC',
  CurrencyDesc = 'currency_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC',
  VanityUrlAsc = 'vanityUrl_ASC',
  VanityUrlDesc = 'vanityUrl_DESC',
  ButtonLinkColorAsc = 'buttonLinkColor_ASC',
  ButtonLinkColorDesc = 'buttonLinkColor_DESC',
  UserInterfaceStyleAsc = 'userInterfaceStyle_ASC',
  UserInterfaceStyleDesc = 'userInterfaceStyle_DESC',
  MenuBarBgColorAsc = 'menuBarBGColor_ASC',
  MenuBarBgColorDesc = 'menuBarBGColor_DESC',
  MenuBarIconsColorAsc = 'menuBarIconsColor_ASC',
  MenuBarIconsColorDesc = 'menuBarIconsColor_DESC',
  BgColorAsc = 'bgColor_ASC',
  BgColorDesc = 'bgColor_DESC',
  ContainerColorAsc = 'containerColor_ASC',
  ContainerColorDesc = 'containerColor_DESC',
  LeftNavColorAsc = 'leftNavColor_ASC',
  LeftNavColorDesc = 'leftNavColor_DESC',
}

export type SettingPayload = {
  __typename?: 'SettingPayload';
  mutation: MutationType;
  node?: Maybe<Setting>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<Setting>;
};

export type SettingRelationFilter = {
  some?: Maybe<SettingFilter>;
  every?: Maybe<SettingFilter>;
  none?: Maybe<SettingFilter>;
};

export type SettingSort = {
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  passwordMinLength?: Maybe<SortOrder>;
  passwordRequireNumbers?: Maybe<SortOrder>;
  passwordRequireSpecial?: Maybe<SortOrder>;
  passwordRequireUppercase?: Maybe<SortOrder>;
  passwordRequireLowercase?: Maybe<SortOrder>;
  passwordUpdateInterval?: Maybe<SortOrder>;
  rememberDevice?: Maybe<SortOrder>;
  language?: Maybe<SortOrder>;
  dateFormat?: Maybe<SortOrder>;
  currency?: Maybe<SortOrder>;
  timezone?: Maybe<SortOrder>;
  vanityUrl?: Maybe<SortOrder>;
  buttonLinkColor?: Maybe<SortOrder>;
  userInterfaceStyle?: Maybe<SortOrder>;
  menuBarBGColor?: Maybe<SortOrder>;
  menuBarIconsColor?: Maybe<SortOrder>;
  bgColor?: Maybe<SortOrder>;
  containerColor?: Maybe<SortOrder>;
  leftNavColor?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  menuBarLogo?: Maybe<FileSort>;
  landingPageImage?: Maybe<FileSort>;
};

export type SettingSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<SettingFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type SettingUpdateInput = {
  passwordMinLength?: Maybe<Scalars['Int']>;
  passwordRequireNumbers?: Maybe<Scalars['Boolean']>;
  passwordRequireSpecial?: Maybe<Scalars['Boolean']>;
  passwordRequireUppercase?: Maybe<Scalars['Boolean']>;
  passwordRequireLowercase?: Maybe<Scalars['Boolean']>;
  passwordUpdateInterval?: Maybe<Scalars['Int']>;
  rememberDevice?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  dateFormat?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  vanityUrl?: Maybe<Scalars['String']>;
  buttonLinkColor?: Maybe<Scalars['String']>;
  userInterfaceStyle?: Maybe<Scalars['String']>;
  menuBarBGColor?: Maybe<Scalars['String']>;
  menuBarIconsColor?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  containerColor?: Maybe<Scalars['String']>;
  leftNavColor?: Maybe<Scalars['String']>;
};

export type SignUpResendInput = {
  email: Scalars['String'];
};

export type SmartFieldTypeAttributes = {
  __typename?: 'SmartFieldTypeAttributes';
  format: Scalars['String'];
  innerFields?: Maybe<Array<Maybe<CustomTableField>>>;
};

export enum SmartTypeFormatEnum {
  Address = 'ADDRESS',
  Phone = 'PHONE',
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type StringPadFunctionArguments = {
  len: Scalars['Int'];
  str: Scalars['String'];
};

export type StringPredicate = {
  equals?: Maybe<Scalars['String']>;
  not_equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  not_in?: Maybe<Array<Scalars['String']>>;
  contains?: Maybe<Scalars['String']>;
  not_contains?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  not_starts_with?: Maybe<Scalars['String']>;
  ends_with?: Maybe<Scalars['String']>;
  not_ends_with?: Maybe<Scalars['String']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
};

export type StringPredicateHaving = {
  equals?: Maybe<Scalars['String']>;
  not_equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  not_in?: Maybe<Array<Scalars['String']>>;
  contains?: Maybe<Scalars['String']>;
  not_contains?: Maybe<Scalars['String']>;
  starts_with?: Maybe<Scalars['String']>;
  not_starts_with?: Maybe<Scalars['String']>;
  ends_with?: Maybe<Scalars['String']>;
  not_ends_with?: Maybe<Scalars['String']>;
  is_empty?: Maybe<Scalars['Boolean']>;
  is_not_empty?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<StringPredicateHaving>>;
  OR?: Maybe<Array<StringPredicateHaving>>;
};

export enum StringTrimMode {
  Both = 'BOTH',
  Leading = 'LEADING',
  Trailing = 'TRAILING',
}

export type Subscription = {
  __typename?: 'Subscription';
  Accounts?: Maybe<AccountPayload>;
  ApiTokens?: Maybe<ApiTokenPayload>;
  AuthenticationProfiles?: Maybe<AuthenticationProfilePayload>;
  AuthenticationSettings?: Maybe<AuthenticationSettingPayload>;
  EnvironmentVariables?: Maybe<EnvironmentVariablePayload>;
  Files?: Maybe<FilePayload>;
  Groups?: Maybe<GroupPayload>;
  NotificationPreferences?: Maybe<NotificationPreferencePayload>;
  Notifications?: Maybe<NotificationPayload>;
  Permissions?: Maybe<PermissionPayload>;
  Roles?: Maybe<RolePayload>;
  Settings?: Maybe<SettingPayload>;
  TeamInvitations?: Maybe<TeamInvitationPayload>;
  TeamMembers?: Maybe<TeamMemberPayload>;
  Users?: Maybe<UserPayload>;
};

export type SubscriptionAccountsArgs = {
  filter?: Maybe<AccountSubscriptionFilter>;
};

export type SubscriptionApiTokensArgs = {
  filter?: Maybe<ApiTokenSubscriptionFilter>;
};

export type SubscriptionAuthenticationProfilesArgs = {
  filter?: Maybe<AuthenticationProfileSubscriptionFilter>;
};

export type SubscriptionAuthenticationSettingsArgs = {
  filter?: Maybe<AuthenticationSettingSubscriptionFilter>;
};

export type SubscriptionEnvironmentVariablesArgs = {
  filter?: Maybe<EnvironmentVariableSubscriptionFilter>;
};

export type SubscriptionFilesArgs = {
  filter?: Maybe<FileSubscriptionFilter>;
};

export type SubscriptionGroupsArgs = {
  filter?: Maybe<GroupSubscriptionFilter>;
};

export type SubscriptionNotificationPreferencesArgs = {
  filter?: Maybe<NotificationPreferenceSubscriptionFilter>;
};

export type SubscriptionNotificationsArgs = {
  filter?: Maybe<NotificationSubscriptionFilter>;
};

export type SubscriptionPermissionsArgs = {
  filter?: Maybe<PermissionSubscriptionFilter>;
};

export type SubscriptionRolesArgs = {
  filter?: Maybe<RoleSubscriptionFilter>;
};

export type SubscriptionSettingsArgs = {
  filter?: Maybe<SettingSubscriptionFilter>;
};

export type SubscriptionTeamInvitationsArgs = {
  filter?: Maybe<TeamInvitationSubscriptionFilter>;
};

export type SubscriptionTeamMembersArgs = {
  filter?: Maybe<TeamMemberSubscriptionFilter>;
};

export type SubscriptionUsersArgs = {
  filter?: Maybe<UserSubscriptionFilter>;
};

export type SubstringFunctionArguments = {
  pos: Scalars['Int'];
  len?: Maybe<Scalars['Int']>;
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  success?: Maybe<Scalars['Boolean']>;
};

export type SwitchFieldTypeAttributes = {
  __typename?: 'SwitchFieldTypeAttributes';
  format: Scalars['String'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum SwitchTypeFormatEnum {
  OnOff = 'ON_OFF',
  YesNo = 'YES_NO',
  TrueFalse = 'TRUE_FALSE',
  ActiveInactive = 'ACTIVE_INACTIVE',
  HighLow = 'HIGH_LOW',
  Custom = 'CUSTOM',
}

export type SystemApplication = {
  __typename?: 'SystemApplication';
  id: Scalars['ID'];
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  appType: Scalars['String'];
  status: SystemApplicationStatusEnum;
};

export type SystemApplicationDeleteMutationInput = {
  id: Scalars['String'];
  force?: Maybe<Scalars['Boolean']>;
};

export type SystemApplicationInstallInput = {
  appType: Scalars['String'];
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SystemApplicationListResponse = {
  __typename?: 'SystemApplicationListResponse';
  items: Array<SystemApplication>;
  count: Scalars['Int'];
};

export enum SystemApplicationStatusEnum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type SystemApplicationUpdateInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SystemBillingCurrentPlanResponse = {
  __typename?: 'SystemBillingCurrentPlanResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  displayName?: Maybe<Scalars['String']>;
  trialEnd?: Maybe<Scalars['DateTime']>;
  status?: Maybe<SystemWorkspaceStatus>;
  nextPlan?: Maybe<SystemBillingNextPlanResponse>;
};

export type SystemBillingDetailsResponse = {
  __typename?: 'SystemBillingDetailsResponse';
  last4?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['Int']>;
  expYear?: Maybe<Scalars['Int']>;
  brand?: Maybe<Scalars['String']>;
};

export type SystemBillingDetailsUpdateMutationInput = {
  cardToken: Scalars['String'];
};

export type SystemBillingInvoiceItem = {
  __typename?: 'SystemBillingInvoiceItem';
  id: Scalars['ID'];
  periodStart?: Maybe<Scalars['DateTime']>;
  periodEnd?: Maybe<Scalars['DateTime']>;
  paid?: Maybe<Scalars['Boolean']>;
  invoicePdf?: Maybe<Scalars['String']>;
  amountDue?: Maybe<Scalars['Float']>;
  amountPaid?: Maybe<Scalars['Float']>;
  amountRemaining?: Maybe<Scalars['Float']>;
  endingBalance?: Maybe<Scalars['Float']>;
  number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
};

export enum SystemBillingInvoicesListFilterType {
  Workspace = 'WORKSPACE',
  Customer = 'CUSTOMER',
}

export type SystemBillingInvoicesListResponse = {
  __typename?: 'SystemBillingInvoicesListResponse';
  items: Array<SystemBillingInvoiceItem>;
  count: Scalars['Int'];
};

export type SystemBillingLimitMetricItem = {
  __typename?: 'SystemBillingLimitMetricItem';
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  showPriority?: Maybe<Scalars['Int']>;
  unit?: Maybe<Scalars['String']>;
};

export type SystemBillingMetricUsageItem = {
  __typename?: 'SystemBillingMetricUsageItem';
  limitMetric?: Maybe<SystemBillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']>;
};

export type SystemBillingMetricUsageQuotaItem = {
  __typename?: 'SystemBillingMetricUsageQuotaItem';
  limitMetric?: Maybe<SystemBillingLimitMetricItem>;
  value?: Maybe<Scalars['Float']>;
};

export type SystemBillingMetricUsageQuotasListResponse = {
  __typename?: 'SystemBillingMetricUsageQuotasListResponse';
  items: Array<SystemBillingMetricUsageQuotaItem>;
  count: Scalars['Int'];
};

export type SystemBillingMetricUsagesListFilter = {
  entryDate: DateTimePredicate;
};

export type SystemBillingMetricUsagesListResponse = {
  __typename?: 'SystemBillingMetricUsagesListResponse';
  items: Array<SystemBillingMetricUsageItem>;
  count: Scalars['Int'];
};

export type SystemBillingNextPlanResponse = {
  __typename?: 'SystemBillingNextPlanResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  displayName?: Maybe<Scalars['String']>;
};

export type SystemBillingPlanBaseInfo = {
  __typename?: 'SystemBillingPlanBaseInfo';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  isCustom?: Maybe<Scalars['Boolean']>;
  isLegacy?: Maybe<Scalars['Boolean']>;
};

export type SystemBillingPlanUpdateMutationInput = {
  planId: Scalars['ID'];
};

export type SystemCustomTableField = {
  __typename?: 'SystemCustomTableField';
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldType?: Maybe<SystemFieldType>;
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes>;
};

export type SystemDateFieldTypeAttributes = {
  __typename?: 'SystemDateFieldTypeAttributes';
  format: Scalars['String'];
};

export enum SystemDateTypeFormatEnum {
  Date = 'DATE',
  Datetime = 'DATETIME',
}

export type SystemDeployDataResponse = {
  __typename?: 'SystemDeployDataResponse';
  uploadBuildUrl: Scalars['String'];
  uploadMetaDataUrl: Scalars['String'];
  buildName: Scalars['String'];
};

export type SystemDeployingBuildInput = {
  buildName: Scalars['String'];
  options?: Maybe<SystemDeployOptions>;
};

export enum SystemDeployModeEnum {
  Full = 'FULL',
  OnlyPlugins = 'ONLY_PLUGINS',
  OnlyProject = 'ONLY_PROJECT',
}

export type SystemDeployOptions = {
  mode?: Maybe<SystemDeployModeEnum>;
  pluginNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum SystemDeployStatusEnum {
  Deploying = 'deploying',
  CompleteError = 'complete_error',
  CompleteSuccess = 'complete_success',
  Compiling = 'compiling',
  Preparing = 'preparing',
  Initialize = 'initialize',
}

export type SystemDeployStatusResult = {
  __typename?: 'SystemDeployStatusResult';
  status: SystemDeployStatusEnum;
  message?: Maybe<Scalars['String']>;
};

export type SystemFieldDataFeatures = {
  __typename?: 'SystemFieldDataFeatures';
  create: Scalars['Boolean'];
  update: Scalars['Boolean'];
  sort: Scalars['Boolean'];
};

export type SystemFieldSchemaFeatures = {
  __typename?: 'SystemFieldSchemaFeatures';
  update: Scalars['Boolean'];
  delete: Scalars['Boolean'];
};

export enum SystemFieldType {
  Id = 'ID',
  Uuid = 'UUID',
  Json = 'JSON',
  Number = 'NUMBER',
  Text = 'TEXT',
  Date = 'DATE',
  Switch = 'SWITCH',
  Relation = 'RELATION',
  MissingRelation = 'MISSING_RELATION',
  OneWayRelation = 'ONE_WAY_RELATION',
  File = 'FILE',
  Smart = 'SMART',
}

export type SystemFieldTypeAttributes =
  | SystemDateFieldTypeAttributes
  | SystemFileFieldTypeAttributes
  | SystemMissingRelationFieldTypeAttributes
  | SystemNumberFieldTypeAttributes
  | SystemSmartFieldTypeAttributes
  | SystemSwitchFieldTypeAttributes
  | SystemTextFieldTypeAttributes
  | SystemUuidFieldTypeAttributes;

export type SystemFieldTypeAttributesInput = {
  format?: Maybe<Scalars['String']>;
  precision?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  minValue?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  isBigInt?: Maybe<Scalars['Boolean']>;
  fieldSize?: Maybe<Scalars['Int']>;
  expiration?: Maybe<Scalars['Int']>;
  listOptions?: Maybe<Array<Scalars['String']>>;
  maxSize?: Maybe<Scalars['Int']>;
  typeRestrictions?: Maybe<Array<Scalars['String']>>;
};

export type SystemFileFieldTypeAttributes = {
  __typename?: 'SystemFileFieldTypeAttributes';
  format: Scalars['String'];
  maxSize?: Maybe<Scalars['Int']>;
  showTitle?: Maybe<Scalars['Boolean']>;
  showUrl?: Maybe<Scalars['Boolean']>;
  typeRestrictions?: Maybe<Array<Scalars['String']>>;
  expiration?: Maybe<Scalars['Int']>;
};

export enum SystemFileTypeFormatEnum {
  File = 'FILE',
  Image = 'IMAGE',
}

export type SystemFunctionInfo = {
  name: Scalars['String'];
  functionType: SystemFunctionType;
  description?: Maybe<Scalars['String']>;
  application?: Maybe<SystemApplication>;
};

export type SystemFunctionInfoFilter = {
  name?: Maybe<Scalars['String']>;
  functionType?: Maybe<SystemFunctionType>;
  description?: Maybe<Scalars['String']>;
};

export enum SystemFunctionInfoOrderBy {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  FunctionTypeAsc = 'functionType_ASC',
  FunctionTypeDesc = 'functionType_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
}

export type SystemFunctionListResponse = {
  __typename?: 'SystemFunctionListResponse';
  items: Array<SystemFunctionInfo>;
  count: Scalars['Int'];
};

export type SystemFunctionResolverInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionResolverInfo';
  name: Scalars['String'];
  functionType: SystemFunctionType;
  description?: Maybe<Scalars['String']>;
  gqlType: Scalars['String'];
  application?: Maybe<SystemApplication>;
};

export type SystemFunctionTaskInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionTaskInfo';
  name: Scalars['String'];
  functionType: SystemFunctionType;
  description?: Maybe<Scalars['String']>;
  scheduleExpression?: Maybe<Scalars['String']>;
  application?: Maybe<SystemApplication>;
};

export type SystemFunctionTriggerInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionTriggerInfo';
  name: Scalars['String'];
  functionType: SystemFunctionType;
  description?: Maybe<Scalars['String']>;
  operation: Scalars['String'];
  tableName: Scalars['String'];
  type: Scalars['String'];
  application?: Maybe<SystemApplication>;
};

export enum SystemFunctionType {
  Resolver = 'resolver',
  Trigger = 'trigger',
  Webhook = 'webhook',
  Task = 'task',
  Schedule = 'schedule',
}

export type SystemFunctionWebhookInfo = SystemFunctionInfo & {
  __typename?: 'SystemFunctionWebhookInfo';
  name: Scalars['String'];
  functionType: SystemFunctionType;
  description?: Maybe<Scalars['String']>;
  httpMethod: Scalars['String'];
  workspaceRelativePath: Scalars['String'];
  application?: Maybe<SystemApplication>;
};

export type SystemInvokeData = {
  functionName: Scalars['String'];
  inputArgs?: Maybe<Scalars['String']>;
};

export type SystemInvokeFunctionResponse = {
  __typename?: 'SystemInvokeFunctionResponse';
  responseData: Scalars['String'];
};

export type SystemMissingRelationFieldTypeAttributes = {
  __typename?: 'SystemMissingRelationFieldTypeAttributes';
  missingTable: Scalars['String'];
};

export type SystemMutation = {
  __typename?: 'SystemMutation';
  applicationDelete?: Maybe<SuccessResponse>;
  applicationInstall?: Maybe<SystemApplication>;
  applicationUpdate?: Maybe<SystemApplication>;
  billingDetailsUpdate?: Maybe<SystemBillingDetailsResponse>;
  billingPlanUpdate?: Maybe<SystemBillingCurrentPlanResponse>;
  deploy?: Maybe<Scalars['Boolean']>;
  fieldCreate: SystemTableField;
  fieldDelete: SuccessResponse;
  fieldUpdate: SystemTableField;
  fieldUpdatePosition: SuccessResponse;
  invoke?: Maybe<SystemInvokeFunctionResponse>;
  prepareDeploy: SystemDeployDataResponse;
  tableCreate: SystemTable;
  tableDelete: SuccessResponse;
  tableUpdate: SystemTable;
  viewCreate: SystemTable;
  workspaceCreate?: Maybe<SystemWorkspaceCreateResponse>;
  workspaceCreateAsync?: Maybe<SystemWorkspaceCreateResponse>;
  workspaceDelete?: Maybe<SuccessResponse>;
  workspaceLeave?: Maybe<SuccessResponse>;
  workspaceUpdate?: Maybe<SystemWorkspaceUpdateResponse>;
};

export type SystemMutationApplicationDeleteArgs = {
  data: SystemApplicationDeleteMutationInput;
};

export type SystemMutationApplicationInstallArgs = {
  data: SystemApplicationInstallInput;
};

export type SystemMutationApplicationUpdateArgs = {
  data: SystemApplicationUpdateInput;
};

export type SystemMutationBillingDetailsUpdateArgs = {
  data: SystemBillingDetailsUpdateMutationInput;
};

export type SystemMutationBillingPlanUpdateArgs = {
  data: SystemBillingPlanUpdateMutationInput;
};

export type SystemMutationDeployArgs = {
  data?: Maybe<SystemDeployingBuildInput>;
};

export type SystemMutationFieldCreateArgs = {
  data: SystemTableFieldCreateInput;
};

export type SystemMutationFieldDeleteArgs = {
  data: SystemTableFieldDeleteInput;
};

export type SystemMutationFieldUpdateArgs = {
  data: SystemTableFieldUpdateInput;
};

export type SystemMutationFieldUpdatePositionArgs = {
  data: SystemTableFieldPositionUpdateInput;
};

export type SystemMutationInvokeArgs = {
  data?: Maybe<SystemInvokeData>;
};

export type SystemMutationTableCreateArgs = {
  data: SystemTableCreateInput;
};

export type SystemMutationTableDeleteArgs = {
  data: SystemTableDeleteInput;
};

export type SystemMutationTableUpdateArgs = {
  data: SystemTableUpdateInput;
};

export type SystemMutationViewCreateArgs = {
  data: SystemViewCreateInput;
};

export type SystemMutationWorkspaceCreateArgs = {
  data: SystemWorkspaceCreateMutationInput;
};

export type SystemMutationWorkspaceCreateAsyncArgs = {
  data: SystemWorkspaceCreateMutationInput;
};

export type SystemMutationWorkspaceDeleteArgs = {
  data: SystemWorkspaceDeleteMutationInput;
};

export type SystemMutationWorkspaceLeaveArgs = {
  force?: Maybe<Scalars['Boolean']>;
};

export type SystemMutationWorkspaceUpdateArgs = {
  data: SystemWorkspaceUpdateMutationInput;
};

export type SystemNumberFieldTypeAttributes = {
  __typename?: 'SystemNumberFieldTypeAttributes';
  format: Scalars['String'];
  precision?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  minValue?: Maybe<Scalars['Float']>;
  maxValue?: Maybe<Scalars['Float']>;
  isBigInt?: Maybe<Scalars['Boolean']>;
};

export enum SystemNumberTypeFormatEnum {
  Number = 'NUMBER',
  Currency = 'CURRENCY',
  Percentage = 'PERCENTAGE',
  Fraction = 'FRACTION',
  Scientific = 'SCIENTIFIC',
}

export type SystemQuery = {
  __typename?: 'SystemQuery';
  application?: Maybe<SystemApplication>;
  applicationsList?: Maybe<SystemApplicationListResponse>;
  billingCurrentPlan?: Maybe<SystemBillingCurrentPlanResponse>;
  billingDetails?: Maybe<SystemBillingDetailsResponse>;
  billingInvoicesList: SystemBillingInvoicesListResponse;
  billingMetricUsageQuotasList: SystemBillingMetricUsageQuotasListResponse;
  billingMetricUsagesList: SystemBillingMetricUsagesListResponse;
  deployStatus: SystemDeployStatusResult;
  functionsList?: Maybe<SystemFunctionListResponse>;
  logs?: Maybe<Array<Maybe<Scalars['String']>>>;
  table?: Maybe<SystemTable>;
  tableField?: Maybe<SystemTableField>;
  tablesList: SystemTableListResponse;
  userBillingConfiguration: SystemUserBillingConfigurationResponse;
  workspacesList?: Maybe<SystemWorkspaceListResponse>;
};

export type SystemQueryApplicationArgs = {
  id: Scalars['String'];
};

export type SystemQueryBillingInvoicesListArgs = {
  by?: Maybe<SystemBillingInvoicesListFilterType>;
  limit?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['ID']>;
  after?: Maybe<Scalars['ID']>;
};

export type SystemQueryBillingMetricUsagesListArgs = {
  filter?: Maybe<SystemBillingMetricUsagesListFilter>;
};

export type SystemQueryDeployStatusArgs = {
  buildName: Scalars['String'];
};

export type SystemQueryFunctionsListArgs = {
  applicationId?: Maybe<Scalars['String']>;
  filter?: Maybe<SystemFunctionInfoFilter>;
  orderBy?: Maybe<Array<Maybe<SystemFunctionInfoOrderBy>>>;
};

export type SystemQueryLogsArgs = {
  functionName: Scalars['String'];
  applicationId?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  startTime?: Maybe<Scalars['DateTime']>;
  endTime?: Maybe<Scalars['DateTime']>;
};

export type SystemQueryTableArgs = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type SystemQueryTableFieldArgs = {
  id: Scalars['ID'];
};

export type SystemQueryTablesListArgs = {
  filter?: Maybe<SystemTableListFilter>;
};

export type SystemRelation = {
  __typename?: 'SystemRelation';
  refTable: SystemTable;
  refField?: Maybe<SystemTableField>;
  relationTableName: Scalars['String'];
  relationFieldName?: Maybe<Scalars['String']>;
  refFieldName?: Maybe<Scalars['String']>;
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList?: Maybe<Scalars['Boolean']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']>;
};

export type SystemRelationCreateInput = {
  refTableId: Scalars['ID'];
  refFieldName?: Maybe<Scalars['String']>;
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList: Scalars['Boolean'];
  refFieldIsRequired: Scalars['Boolean'];
};

export type SystemRelationUpdateInput = {
  refTableId?: Maybe<Scalars['ID']>;
  refFieldName?: Maybe<Scalars['String']>;
  refFieldDisplayName?: Maybe<Scalars['String']>;
  refFieldIsList?: Maybe<Scalars['Boolean']>;
  refFieldIsRequired?: Maybe<Scalars['Boolean']>;
};

export type SystemSchemaOrigin = {
  __typename?: 'SystemSchemaOrigin';
  type: SystemSchemaOriginType;
  provider?: Maybe<Scalars['String']>;
};

export enum SystemSchemaOriginType {
  Remote = 'REMOTE',
  Local = 'LOCAL',
  View = 'VIEW',
}

export type SystemSmartFieldTypeAttributes = {
  __typename?: 'SystemSmartFieldTypeAttributes';
  format: Scalars['String'];
  innerFields?: Maybe<Array<Maybe<SystemCustomTableField>>>;
};

export enum SystemSmartTypeFormatEnum {
  Address = 'ADDRESS',
  Phone = 'PHONE',
}

export type SystemSwitchFieldTypeAttributes = {
  __typename?: 'SystemSwitchFieldTypeAttributes';
  format: Scalars['String'];
  listOptions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum SystemSwitchTypeFormatEnum {
  OnOff = 'ON_OFF',
  YesNo = 'YES_NO',
  TrueFalse = 'TRUE_FALSE',
  ActiveInactive = 'ACTIVE_INACTIVE',
  HighLow = 'HIGH_LOW',
  Custom = 'CUSTOM',
}

export type SystemTable = {
  __typename?: 'SystemTable';
  id: Scalars['ID'];
  application?: Maybe<SystemApplication>;
  isSystem: Scalars['Boolean'];
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<SystemTableField>>>;
  origin: SystemSchemaOrigin;
  schemaFeatures: SystemTableSchemaFeatures;
  dataFeatures: SystemTableDataFeatures;
};

export type SystemTableCreateInput = {
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
};

export type SystemTableDataFeatures = {
  __typename?: 'SystemTableDataFeatures';
  create: Scalars['Boolean'];
  update: Scalars['Boolean'];
  delete: Scalars['Boolean'];
};

export type SystemTableDeleteInput = {
  id: Scalars['ID'];
};

export type SystemTableField = {
  __typename?: 'SystemTableField';
  id: Scalars['ID'];
  table: SystemTable;
  isSystem: Scalars['Boolean'];
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldType: SystemFieldType;
  origin: SystemSchemaOrigin;
  schemaFeatures: SystemFieldSchemaFeatures;
  dataFeatures: SystemFieldDataFeatures;
  isMeta: Scalars['Boolean'];
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributes>;
  relation?: Maybe<SystemRelation>;
};

export type SystemTableFieldCreateInput = {
  tableId: Scalars['ID'];
  force?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldType: SystemFieldType;
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  initialValue?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributesInput>;
  relation?: Maybe<SystemRelationCreateInput>;
};

export type SystemTableFieldDeleteInput = {
  id: Scalars['ID'];
};

export type SystemTableFieldPositionUpdateInput = {
  id: Scalars['ID'];
  newPosition: Scalars['Int'];
};

export type SystemTableFieldUpdateInput = {
  id: Scalars['ID'];
  force?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldType?: Maybe<SystemFieldType>;
  isList?: Maybe<Scalars['Boolean']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  isUnique?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  initialValue?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  fieldTypeAttributes?: Maybe<SystemFieldTypeAttributesInput>;
  relation?: Maybe<SystemRelationUpdateInput>;
};

export type SystemTableListFilter = {
  onlyUserTables?: Maybe<Scalars['Boolean']>;
  tableNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SystemTableListResponse = {
  __typename?: 'SystemTableListResponse';
  items?: Maybe<Array<Maybe<SystemTable>>>;
  count?: Maybe<Scalars['Int']>;
};

export type SystemTableSchemaCreateFeatures = {
  __typename?: 'SystemTableSchemaCreateFeatures';
  ID: Scalars['Boolean'];
  UUID: Scalars['Boolean'];
  JSON: Scalars['Boolean'];
  NUMBER: Scalars['Boolean'];
  TEXT: Scalars['Boolean'];
  DATE: Scalars['Boolean'];
  SWITCH: Scalars['Boolean'];
  RELATION: Scalars['Boolean'];
  MISSING_RELATION: Scalars['Boolean'];
  ONE_WAY_RELATION: Scalars['Boolean'];
  FILE: Scalars['Boolean'];
  SMART: Scalars['Boolean'];
};

export type SystemTableSchemaFeatures = {
  __typename?: 'SystemTableSchemaFeatures';
  create: SystemTableSchemaCreateFeatures;
  update?: Maybe<SystemTableSchemaMetaFieldFeatures>;
};

export type SystemTableSchemaMetaFieldFeatures = {
  __typename?: 'SystemTableSchemaMetaFieldFeatures';
  name: Scalars['Boolean'];
  displayName: Scalars['Boolean'];
};

export type SystemTableUpdateInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
};

export type SystemTextFieldTypeAttributes = {
  __typename?: 'SystemTextFieldTypeAttributes';
  format: Scalars['String'];
  fieldSize?: Maybe<Scalars['Int']>;
};

export enum SystemTextTypeFormatEnum {
  Unformatted = 'UNFORMATTED',
  Name = 'NAME',
  Ein = 'EIN',
  Email = 'EMAIL',
}

export type SystemUserBillingConfigurationResponse = {
  __typename?: 'SystemUserBillingConfigurationResponse';
  isCancelSubscriptionAvailable: Scalars['Boolean'];
  availablePlans: Array<SystemBillingPlanBaseInfo>;
};

export type SystemUuidFieldTypeAttributes = {
  __typename?: 'SystemUUIDFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']>;
};

export type SystemViewCreateInput = {
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  query: Scalars['String'];
};

export type SystemWorkspaceCreateMutationInput = {
  name: Scalars['String'];
  billingPlanId?: Maybe<Scalars['ID']>;
};

export type SystemWorkspaceCreateResponse = {
  __typename?: 'SystemWorkspaceCreateResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type SystemWorkspaceDeleteMutationInput = {
  id: Scalars['ID'];
};

export type SystemWorkspaceListResponse = {
  __typename?: 'SystemWorkspaceListResponse';
  items: Array<WorkspaceItem>;
  count: Scalars['Int'];
};

export enum SystemWorkspaceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Canceled = 'canceled',
  Suspended = 'suspended',
  Canceling = 'canceling',
  Pending = 'pending',
}

export type SystemWorkspaceUpdateMutationInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type SystemWorkspaceUpdateResponse = {
  __typename?: 'SystemWorkspaceUpdateResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Table = {
  __typename?: 'Table';
  id: Scalars['ID'];
  application?: Maybe<Application>;
  isSystem: Scalars['Boolean'];
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<TableField>>>;
  origin: SchemaOrigin;
  schemaFeatures: TableSchemaFeatures;
  dataFeatures: TableDataFeatures;
};

export type TableCreateInput = {
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
};

export type TableDataFeatures = {
  __typename?: 'TableDataFeatures';
  create: Scalars['Boolean'];
  update: Scalars['Boolean'];
  delete: Scalars['Boolean'];
};

export type TableDeleteInput = {
  id: Scalars['ID'];
};

export type TableField = {
  __typename?: 'TableField';
  id: Scalars['ID'];
  table: Table;
  isSystem: Scalars['Boolean'];
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldType: FieldType;
  origin: SchemaOrigin;
  schemaFeatures: FieldSchemaFeatures;
  dataFeatures: FieldDataFeatures;
  isMeta: Scalars['Boolean'];
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  fieldTypeAttributes?: Maybe<FieldTypeAttributes>;
  relation?: Maybe<Relation>;
};

export type TableFieldCreateInput = {
  tableId: Scalars['ID'];
  force?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldType: FieldType;
  isList: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  isUnique?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  initialValue?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  fieldTypeAttributes?: Maybe<FieldTypeAttributesInput>;
  relation?: Maybe<RelationCreateInput>;
};

export type TableFieldDeleteInput = {
  id: Scalars['ID'];
};

export type TableFieldPositionUpdateInput = {
  id: Scalars['ID'];
  newPosition: Scalars['Int'];
};

export type TableFieldUpdateInput = {
  id: Scalars['ID'];
  force?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  fieldType?: Maybe<FieldType>;
  isList?: Maybe<Scalars['Boolean']>;
  isRequired?: Maybe<Scalars['Boolean']>;
  isUnique?: Maybe<Scalars['Boolean']>;
  defaultValue?: Maybe<Scalars['String']>;
  initialValue?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  fieldTypeAttributes?: Maybe<FieldTypeAttributesInput>;
  relation?: Maybe<RelationUpdateInput>;
};

export type TableListFilter = {
  onlyUserTables?: Maybe<Scalars['Boolean']>;
  tableNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TableListResponse = {
  __typename?: 'TableListResponse';
  items?: Maybe<Array<Maybe<Table>>>;
  count?: Maybe<Scalars['Int']>;
};

export type TableSchemaCreateFeatures = {
  __typename?: 'TableSchemaCreateFeatures';
  ID: Scalars['Boolean'];
  UUID: Scalars['Boolean'];
  JSON: Scalars['Boolean'];
  NUMBER: Scalars['Boolean'];
  TEXT: Scalars['Boolean'];
  DATE: Scalars['Boolean'];
  SWITCH: Scalars['Boolean'];
  RELATION: Scalars['Boolean'];
  MISSING_RELATION: Scalars['Boolean'];
  ONE_WAY_RELATION: Scalars['Boolean'];
  FILE: Scalars['Boolean'];
  SMART: Scalars['Boolean'];
};

export type TableSchemaFeatures = {
  __typename?: 'TableSchemaFeatures';
  create: TableSchemaCreateFeatures;
  update?: Maybe<TableSchemaMetaFieldFeatures>;
};

export type TableSchemaMetaFieldFeatures = {
  __typename?: 'TableSchemaMetaFieldFeatures';
  name: Scalars['Boolean'];
  displayName: Scalars['Boolean'];
};

export type TableUpdateInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
};

export type TeamInvitation = {
  __typename?: 'TeamInvitation';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  uuid?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  resentOn?: Maybe<Scalars['DateTime']>;
  accepted?: Maybe<Scalars['Boolean']>;
  acceptedOn?: Maybe<Scalars['DateTime']>;
  invitee?: Maybe<TeamMember>;
  invitedBy?: Maybe<TeamMember>;
  _description?: Maybe<Scalars['String']>;
};

export type TeamInvitationAcceptInput = {
  uuid: Scalars['String'];
  accepted: Scalars['Boolean'];
};

export type TeamInvitationAcceptResponse = {
  __typename?: 'TeamInvitationAcceptResponse';
  success: Scalars['Boolean'];
  invitation: TeamInvitation;
};

export type TeamInvitationCancelInput = {
  memberId: Scalars['ID'];
};

export type TeamInvitationDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type TeamInvitationDetails = {
  __typename?: 'TeamInvitationDetails';
  uuid?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isRegistered?: Maybe<Scalars['Boolean']>;
  invitedBy?: Maybe<InvitedByName>;
};

export type TeamInvitationFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  uuid?: Maybe<StringPredicate>;
  email?: Maybe<StringPredicate>;
  firstName?: Maybe<StringPredicate>;
  lastName?: Maybe<StringPredicate>;
  resentOn?: Maybe<DateTimePredicate>;
  accepted?: Maybe<BoolPredicate>;
  acceptedOn?: Maybe<DateTimePredicate>;
  _fullText?: Maybe<Scalars['String']>;
  createdBy?: Maybe<UserFilter>;
  invitee?: Maybe<TeamMemberFilter>;
  invitedBy?: Maybe<TeamMemberFilter>;
  AND?: Maybe<Array<TeamInvitationFilter>>;
  OR?: Maybe<Array<TeamInvitationFilter>>;
};

export type TeamInvitationGroupBy = {
  query: TeamInvitationGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type TeamInvitationGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  uuid?: Maybe<Array<GroupByField>>;
  email?: Maybe<Array<GroupByField>>;
  firstName?: Maybe<Array<GroupByField>>;
  lastName?: Maybe<Array<GroupByField>>;
  resentOn?: Maybe<Array<GroupByField>>;
  accepted?: Maybe<Array<GroupByField>>;
  acceptedOn?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  invitee?: Maybe<TeamMemberGroupByQuery>;
  invitedBy?: Maybe<TeamMemberGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type TeamInvitationKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

export type TeamInvitationListResponse = {
  __typename?: 'TeamInvitationListResponse';
  items: Array<TeamInvitation>;
  count: Scalars['Int'];
  groups: Array<GroupByResponse>;
};

export enum TeamInvitationOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  UuidAsc = 'uuid_ASC',
  UuidDesc = 'uuid_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  ResentOnAsc = 'resentOn_ASC',
  ResentOnDesc = 'resentOn_DESC',
  AcceptedAsc = 'accepted_ASC',
  AcceptedDesc = 'accepted_DESC',
  AcceptedOnAsc = 'acceptedOn_ASC',
  AcceptedOnDesc = 'acceptedOn_DESC',
}

export type TeamInvitationPayload = {
  __typename?: 'TeamInvitationPayload';
  mutation: MutationType;
  node?: Maybe<TeamInvitation>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<TeamInvitation>;
};

export type TeamInvitationRelationFilter = {
  some?: Maybe<TeamInvitationFilter>;
  every?: Maybe<TeamInvitationFilter>;
  none?: Maybe<TeamInvitationFilter>;
};

export type TeamInvitationResendInput = {
  memberId: Scalars['ID'];
};

export type TeamInvitationsDetailsList = {
  __typename?: 'TeamInvitationsDetailsList';
  items?: Maybe<Array<Maybe<TeamInvitationDetails>>>;
  count?: Maybe<Scalars['Int']>;
};

export type TeamInvitationSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  uuid?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  resentOn?: Maybe<SortOrder>;
  accepted?: Maybe<SortOrder>;
  acceptedOn?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  invitee?: Maybe<TeamMemberSort>;
  invitedBy?: Maybe<TeamMemberSort>;
};

export type TeamInvitationSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<TeamInvitationFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  user?: Maybe<User>;
  status?: Maybe<Scalars['String']>;
  isOwner?: Maybe<Scalars['Boolean']>;
  avatar?: Maybe<File>;
  roles?: Maybe<RoleListResponse>;
  receivedTeamInvitations?: Maybe<TeamInvitationListResponse>;
  sentTeamInvitations?: Maybe<TeamInvitationListResponse>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  learningMode?: Maybe<Scalars['Boolean']>;
  permissions?: Maybe<UserPermissionList>;
  _description?: Maybe<Scalars['String']>;
};

export type TeamMemberRolesArgs = {
  filter?: Maybe<RoleFilter>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  sort?: Maybe<Array<RoleSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
};

export type TeamMemberReceivedTeamInvitationsArgs = {
  filter?: Maybe<TeamInvitationFilter>;
  orderBy?: Maybe<Array<Maybe<TeamInvitationOrderBy>>>;
  sort?: Maybe<Array<TeamInvitationSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<TeamInvitationGroupBy>;
};

export type TeamMemberSentTeamInvitationsArgs = {
  filter?: Maybe<TeamInvitationFilter>;
  orderBy?: Maybe<Array<Maybe<TeamInvitationOrderBy>>>;
  sort?: Maybe<Array<TeamInvitationSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<TeamInvitationGroupBy>;
};

export type TeamMemberPermissionsArgs = {
  filter?: Maybe<PermissionInputFilter>;
};

export type TeamMemberDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type TeamMemberFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  status?: Maybe<StringPredicate>;
  isOwner?: Maybe<BoolPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  is_self?: Maybe<Scalars['Boolean']>;
  not_self?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<UserFilter>;
  user?: Maybe<UserFilter>;
  avatar?: Maybe<FileFilter>;
  roles?: Maybe<RoleRelationFilter>;
  receivedTeamInvitations?: Maybe<TeamInvitationRelationFilter>;
  sentTeamInvitations?: Maybe<TeamInvitationRelationFilter>;
  AND?: Maybe<Array<TeamMemberFilter>>;
  OR?: Maybe<Array<TeamMemberFilter>>;
};

export type TeamMemberGroupBy = {
  query: TeamMemberGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type TeamMemberGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  status?: Maybe<Array<GroupByField>>;
  isOwner?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  user?: Maybe<UserGroupByQuery>;
  avatar?: Maybe<FileGroupByQuery>;
  roles?: Maybe<RoleGroupByQuery>;
  receivedTeamInvitations?: Maybe<TeamInvitationGroupByQuery>;
  sentTeamInvitations?: Maybe<TeamInvitationGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type TeamMemberKeyFilter = {
  id?: Maybe<Scalars['ID']>;
};

export type TeamMemberListResponse = {
  __typename?: 'TeamMemberListResponse';
  items: Array<TeamMember>;
  count: Scalars['Int'];
  groups: Array<GroupByResponse>;
};

export enum TeamMemberOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  IsOwnerAsc = 'isOwner_ASC',
  IsOwnerDesc = 'isOwner_DESC',
}

export type TeamMemberPayload = {
  __typename?: 'TeamMemberPayload';
  mutation: MutationType;
  node?: Maybe<TeamMember>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<TeamMember>;
};

export type TeamMemberRelationFilter = {
  some?: Maybe<TeamMemberFilter>;
  every?: Maybe<TeamMemberFilter>;
  none?: Maybe<TeamMemberFilter>;
};

export type TeamMembers_Avatar_FileCreateInput = {
  fileId?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  users_avatar?: Maybe<FilesUsers_AvatarRelationInput>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarRelationInput>;
};

export type TeamMembers_Avatar_FileUpdateInput = {
  fileId?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  users_avatar?: Maybe<FilesUsers_AvatarUpdateRelationInput>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarUpdateRelationInput>;
};

export type TeamMembers_RoleCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  users?: Maybe<RolesUsersRelationInput>;
  permissions?: Maybe<PermissionsInput>;
  apiTokens?: Maybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesRelationInput>;
  teamMembers?: Maybe<RolesTeamMembersRelationInput>;
};

export type TeamMembers_RoleUpdateInput = {
  filter?: Maybe<RoleKeyFilter>;
  data: RoleUpdateInput;
};

export type TeamMembersAvatarUpdateRelationInput = {
  connect?: Maybe<FileKeyFilter>;
  disconnect?: Maybe<FileKeyFilter>;
  reconnect?: Maybe<FileKeyFilter>;
  create?: Maybe<TeamMembers_Avatar_FileCreateInput>;
  update?: Maybe<TeamMembers_Avatar_FileUpdateInput>;
};

export type TeamMemberSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  isOwner?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  user?: Maybe<UserSort>;
  avatar?: Maybe<FileSort>;
};

export type TeamMembersReceivedTeamInvitationsUpdateRelationInput = {
  connect?: Maybe<Array<TeamInvitationKeyFilter>>;
  disconnect?: Maybe<Array<TeamInvitationKeyFilter>>;
  reconnect?: Maybe<Array<TeamInvitationKeyFilter>>;
};

export type TeamMembersRolesUpdateRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  disconnect?: Maybe<Array<RoleKeyFilter>>;
  reconnect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<TeamMembers_RoleCreateInput>>>;
  update?: Maybe<Array<Maybe<TeamMembers_RoleUpdateInput>>>;
};

export type TeamMembersSentTeamInvitationsUpdateRelationInput = {
  connect?: Maybe<Array<TeamInvitationKeyFilter>>;
  disconnect?: Maybe<Array<TeamInvitationKeyFilter>>;
  reconnect?: Maybe<Array<TeamInvitationKeyFilter>>;
};

export type TeamMemberSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<TeamMemberFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type TeamMemberUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  avatar?: Maybe<TeamMembersAvatarUpdateRelationInput>;
  roles?: Maybe<TeamMembersRolesUpdateRelationInput>;
  receivedTeamInvitations?: Maybe<TeamMembersReceivedTeamInvitationsUpdateRelationInput>;
  sentTeamInvitations?: Maybe<TeamMembersSentTeamInvitationsUpdateRelationInput>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  learningMode?: Maybe<Scalars['Boolean']>;
};

export type TextFieldTypeAttributes = {
  __typename?: 'TextFieldTypeAttributes';
  format: Scalars['String'];
  fieldSize?: Maybe<Scalars['Int']>;
};

export enum TextTypeFormatEnum {
  Unformatted = 'UNFORMATTED',
  Name = 'NAME',
  Ein = 'EIN',
  Email = 'EMAIL',
}

export type TrimFunctionArguments = {
  str: Scalars['String'];
  mode?: Maybe<StringTrimMode>;
};

export type UpdatedFieldsFilter = {
  contains?: Maybe<Array<Maybe<Scalars['String']>>>;
  every?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  email?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  is8base?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<File>;
  carRegistrationNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<RoleListResponse>;
  notifications?: Maybe<NotificationListResponse>;
  adminAccounts?: Maybe<AccountListResponse>;
  memberAccounts?: Maybe<AccountListResponse>;
  ownedAccounts?: Maybe<AccountListResponse>;
  groups?: Maybe<GroupListResponse>;
  notificationPreferences?: Maybe<NotificationPreferenceListResponse>;
  learningMode?: Maybe<Scalars['Boolean']>;
  permissions?: Maybe<UserPermissionList>;
  _description?: Maybe<Scalars['String']>;
};

export type UserRolesArgs = {
  filter?: Maybe<RoleFilter>;
  orderBy?: Maybe<Array<Maybe<RoleOrderBy>>>;
  sort?: Maybe<Array<RoleSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<RoleGroupBy>;
};

export type UserNotificationsArgs = {
  filter?: Maybe<NotificationFilter>;
  orderBy?: Maybe<Array<Maybe<NotificationOrderBy>>>;
  sort?: Maybe<Array<NotificationSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<NotificationGroupBy>;
};

export type UserAdminAccountsArgs = {
  filter?: Maybe<AccountFilter>;
  orderBy?: Maybe<Array<Maybe<AccountOrderBy>>>;
  sort?: Maybe<Array<AccountSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AccountGroupBy>;
};

export type UserMemberAccountsArgs = {
  filter?: Maybe<AccountFilter>;
  orderBy?: Maybe<Array<Maybe<AccountOrderBy>>>;
  sort?: Maybe<Array<AccountSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AccountGroupBy>;
};

export type UserOwnedAccountsArgs = {
  filter?: Maybe<AccountFilter>;
  orderBy?: Maybe<Array<Maybe<AccountOrderBy>>>;
  sort?: Maybe<Array<AccountSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<AccountGroupBy>;
};

export type UserGroupsArgs = {
  filter?: Maybe<GroupFilter>;
  orderBy?: Maybe<Array<Maybe<GroupOrderBy>>>;
  sort?: Maybe<Array<GroupSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<GroupGroupBy>;
};

export type UserNotificationPreferencesArgs = {
  filter?: Maybe<NotificationPreferenceFilter>;
  orderBy?: Maybe<Array<Maybe<NotificationPreferenceOrderBy>>>;
  sort?: Maybe<Array<NotificationPreferenceSort>>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  groupBy?: Maybe<NotificationPreferenceGroupBy>;
};

export type UserPermissionsArgs = {
  filter?: Maybe<PermissionInputFilter>;
};

export type User_NotificationPreferenceCreateInput = {
  user?: Maybe<NotificationPreferencesUserRelationInput>;
  account?: Maybe<NotificationPreferencesAccountRelationInput>;
  emailEnabled?: Maybe<Scalars['Boolean']>;
  sMSEnabled?: Maybe<Scalars['Boolean']>;
};

export type User_NotificationPreferenceUpdateInput = {
  filter?: Maybe<NotificationPreferenceKeyFilter>;
  data: NotificationPreferenceUpdateInput;
};

export type UserBillingConfigurationResponse = {
  __typename?: 'UserBillingConfigurationResponse';
  isCancelSubscriptionAvailable: Scalars['Boolean'];
  availablePlans: Array<BillingPlanBaseInfo>;
};

export type UserCreateInput = {
  email: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarRelationInput>;
  carRegistrationNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<UsersRolesRelationInput>;
  notifications?: Maybe<UsersNotificationsRelationInput>;
  adminAccounts?: Maybe<UsersAdminAccountsRelationInput>;
  memberAccounts?: Maybe<UsersMemberAccountsRelationInput>;
  ownedAccounts?: Maybe<UsersOwnedAccountsRelationInput>;
  groups?: Maybe<UsersGroupsRelationInput>;
  notificationPreferences?: Maybe<UsersNotificationPreferencesRelationInput>;
};

export type UserCreateManyInput = {
  email: Scalars['String'];
  company?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  carRegistrationNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserDeleteInput = {
  id?: Maybe<Scalars['ID']>;
  force?: Maybe<Scalars['Boolean']>;
};

export type UserFieldsPermissions = {
  createdAt?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['Boolean']>;
  company?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Boolean']>;
  origin?: Maybe<Scalars['Boolean']>;
  is8base?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['Boolean']>;
  mobileNumber?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['Boolean']>;
  timezone?: Maybe<Scalars['Boolean']>;
  carRegistrationNumbers?: Maybe<Scalars['Boolean']>;
};

export type UserFilter = {
  id?: Maybe<IdPredicate>;
  createdAt?: Maybe<DateTimePredicate>;
  updatedAt?: Maybe<DateTimePredicate>;
  email?: Maybe<StringPredicate>;
  company?: Maybe<StringPredicate>;
  status?: Maybe<StringPredicate>;
  origin?: Maybe<StringPredicate>;
  is8base?: Maybe<BoolPredicate>;
  firstName?: Maybe<StringPredicate>;
  mobileNumber?: Maybe<StringPredicate>;
  lastName?: Maybe<StringPredicate>;
  timezone?: Maybe<StringPredicate>;
  _fullText?: Maybe<Scalars['String']>;
  is_self?: Maybe<Scalars['Boolean']>;
  not_self?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<UserFilter>;
  avatar?: Maybe<FileFilter>;
  roles?: Maybe<RoleRelationFilter>;
  notifications?: Maybe<NotificationRelationFilter>;
  adminAccounts?: Maybe<AccountRelationFilter>;
  memberAccounts?: Maybe<AccountRelationFilter>;
  ownedAccounts?: Maybe<AccountRelationFilter>;
  groups?: Maybe<GroupRelationFilter>;
  notificationPreferences?: Maybe<NotificationPreferenceRelationFilter>;
  AND?: Maybe<Array<UserFilter>>;
  OR?: Maybe<Array<UserFilter>>;
};

export type UserGroupBy = {
  query: UserGroupByQuery;
  sort?: Maybe<Array<GroupBySort>>;
  having?: Maybe<Having>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type UserGroupByQuery = {
  id?: Maybe<Array<GroupByField>>;
  createdAt?: Maybe<Array<GroupByField>>;
  updatedAt?: Maybe<Array<GroupByField>>;
  email?: Maybe<Array<GroupByField>>;
  company?: Maybe<Array<GroupByField>>;
  status?: Maybe<Array<GroupByField>>;
  origin?: Maybe<Array<GroupByField>>;
  is8base?: Maybe<Array<GroupByField>>;
  firstName?: Maybe<Array<GroupByField>>;
  mobileNumber?: Maybe<Array<GroupByField>>;
  lastName?: Maybe<Array<GroupByField>>;
  timezone?: Maybe<Array<GroupByField>>;
  carRegistrationNumbers?: Maybe<Array<GroupByField>>;
  createdBy?: Maybe<UserGroupByQuery>;
  avatar?: Maybe<FileGroupByQuery>;
  roles?: Maybe<RoleGroupByQuery>;
  notifications?: Maybe<NotificationGroupByQuery>;
  adminAccounts?: Maybe<AccountGroupByQuery>;
  memberAccounts?: Maybe<AccountGroupByQuery>;
  ownedAccounts?: Maybe<AccountGroupByQuery>;
  groups?: Maybe<GroupGroupByQuery>;
  notificationPreferences?: Maybe<NotificationPreferenceGroupByQuery>;
  _group?: Maybe<Array<GroupIdentifiersGroupByField>>;
};

export type UserInvitationDetails = {
  __typename?: 'UserInvitationDetails';
  uuid?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  isRegistered?: Maybe<Scalars['Boolean']>;
  invitedBy?: Maybe<InvitedByName>;
};

export type UserInvitationList = {
  __typename?: 'UserInvitationList';
  items?: Maybe<Array<Maybe<UserInvitationDetails>>>;
  count?: Maybe<Scalars['Int']>;
};

export type UserKeyFilter = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};

export type UserListResponse = {
  __typename?: 'UserListResponse';
  items: Array<User>;
  count: Scalars['Int'];
  groups: Array<GroupByResponse>;
};

export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  fromInvitation?: Maybe<Scalars['String']>;
  authProfileId?: Maybe<Scalars['ID']>;
};

export type UserManyResponse = {
  __typename?: 'UserManyResponse';
  items: Array<User>;
  count: Scalars['Int'];
};

export type UserNotificationPreferences_AccountCreateInput = {
  owner?: Maybe<AccountsOwnerRelationInput>;
  admins?: Maybe<AccountsAdminsRelationInput>;
  members?: Maybe<AccountsMembersRelationInput>;
  groups?: Maybe<AccountsGroupsRelationInput>;
  name?: Maybe<Scalars['String']>;
  userNotificationPreferences?: Maybe<AccountsUserNotificationPreferencesRelationInput>;
  notifications?: Maybe<AccountsNotificationsRelationInput>;
};

export type UserNotificationPreferences_AccountUpdateInput = {
  owner?: Maybe<AccountsOwnerUpdateRelationInput>;
  admins?: Maybe<AccountsAdminsUpdateRelationInput>;
  members?: Maybe<AccountsMembersUpdateRelationInput>;
  groups?: Maybe<AccountsGroupsUpdateRelationInput>;
  name?: Maybe<Scalars['String']>;
  userNotificationPreferences?: Maybe<AccountsUserNotificationPreferencesUpdateRelationInput>;
  notifications?: Maybe<AccountsNotificationsUpdateRelationInput>;
};

export enum UserOrderBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  OriginAsc = 'origin_ASC',
  OriginDesc = 'origin_DESC',
  IsOwnerAsc = 'isOwner_ASC',
  IsOwnerDesc = 'isOwner_DESC',
  Is8baseAsc = 'is8base_ASC',
  Is8baseDesc = 'is8base_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  MobileNumberAsc = 'mobileNumber_ASC',
  MobileNumberDesc = 'mobileNumber_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  TimezoneAsc = 'timezone_ASC',
  TimezoneDesc = 'timezone_DESC',
}

export type UserPayload = {
  __typename?: 'UserPayload';
  mutation: MutationType;
  node?: Maybe<User>;
  updatedFields?: Maybe<Array<Maybe<Scalars['String']>>>;
  previousValues?: Maybe<User>;
};

export type UserPermission = {
  __typename?: 'UserPermission';
  resourceType?: Maybe<Scalars['String']>;
  resource?: Maybe<Scalars['String']>;
  permission?: Maybe<Scalars['JSON']>;
};

export type UserPermissionList = {
  __typename?: 'UserPermissionList';
  items?: Maybe<Array<UserPermission>>;
  count: Scalars['Int'];
};

export type UserRelationFilter = {
  some?: Maybe<UserFilter>;
  every?: Maybe<UserFilter>;
  none?: Maybe<UserFilter>;
};

export type Users_Avatar_FileCreateInput = {
  fileId?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  users_avatar?: Maybe<FilesUsers_AvatarRelationInput>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarRelationInput>;
};

export type Users_Avatar_FileUpdateInput = {
  fileId?: Maybe<Scalars['String']>;
  public?: Maybe<Scalars['Boolean']>;
  filename?: Maybe<Scalars['String']>;
  meta?: Maybe<Scalars['JSON']>;
  mods?: Maybe<Scalars['JSON']>;
  users_avatar?: Maybe<FilesUsers_AvatarUpdateRelationInput>;
  teamMembers_avatar?: Maybe<FilesTeamMembers_AvatarUpdateRelationInput>;
};

export type Users_NotificationCreateInput = {
  text?: Maybe<Scalars['String']>;
  users?: Maybe<NotificationsUsersRelationInput>;
  delivered?: Maybe<Scalars['Boolean']>;
  account: NotificationsAccountRelationInput;
};

export type Users_NotificationUpdateInput = {
  filter?: Maybe<NotificationKeyFilter>;
  data: NotificationUpdateInput;
};

export type Users_RoleCreateInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  users?: Maybe<RolesUsersRelationInput>;
  permissions?: Maybe<PermissionsInput>;
  apiTokens?: Maybe<RolesApiTokensRelationInput>;
  authenticationProfiles?: Maybe<RolesAuthenticationProfilesRelationInput>;
  teamMembers?: Maybe<RolesTeamMembersRelationInput>;
};

export type Users_RoleUpdateInput = {
  filter?: Maybe<RoleKeyFilter>;
  data: RoleUpdateInput;
};

export type UsersAdminAccountsRelationInput = {
  connect?: Maybe<Array<AccountKeyFilter>>;
  create?: Maybe<Array<Maybe<Admins_AccountCreateInput>>>;
};

export type UsersAdminAccountsUpdateRelationInput = {
  connect?: Maybe<Array<AccountKeyFilter>>;
  disconnect?: Maybe<Array<AccountKeyFilter>>;
  reconnect?: Maybe<Array<AccountKeyFilter>>;
  create?: Maybe<Array<Maybe<Admins_AccountCreateInput>>>;
  update?: Maybe<Array<Maybe<Admins_AccountUpdateInput>>>;
};

export type UsersAvatarRelationInput = {
  connect?: Maybe<FileKeyFilter>;
  create?: Maybe<Users_Avatar_FileCreateInput>;
};

export type UsersAvatarUpdateRelationInput = {
  connect?: Maybe<FileKeyFilter>;
  disconnect?: Maybe<FileKeyFilter>;
  reconnect?: Maybe<FileKeyFilter>;
  create?: Maybe<Users_Avatar_FileCreateInput>;
  update?: Maybe<Users_Avatar_FileUpdateInput>;
};

export type UsersGroupsRelationInput = {
  connect?: Maybe<Array<GroupKeyFilter>>;
  create?: Maybe<Array<Maybe<Members_GroupCreateInput>>>;
};

export type UsersGroupsUpdateRelationInput = {
  connect?: Maybe<Array<GroupKeyFilter>>;
  disconnect?: Maybe<Array<GroupKeyFilter>>;
  reconnect?: Maybe<Array<GroupKeyFilter>>;
  create?: Maybe<Array<Maybe<Members_GroupCreateInput>>>;
  update?: Maybe<Array<Maybe<Members_GroupUpdateInput>>>;
};

export type UsersMemberAccountsRelationInput = {
  connect?: Maybe<Array<AccountKeyFilter>>;
  create?: Maybe<Array<Maybe<Members_AccountCreateInput>>>;
};

export type UsersMemberAccountsUpdateRelationInput = {
  connect?: Maybe<Array<AccountKeyFilter>>;
  disconnect?: Maybe<Array<AccountKeyFilter>>;
  reconnect?: Maybe<Array<AccountKeyFilter>>;
  create?: Maybe<Array<Maybe<Members_AccountCreateInput>>>;
  update?: Maybe<Array<Maybe<Members_AccountUpdateInput>>>;
};

export type UsersNotificationPreferencesRelationInput = {
  connect?: Maybe<Array<NotificationPreferenceKeyFilter>>;
  create?: Maybe<Array<Maybe<User_NotificationPreferenceCreateInput>>>;
};

export type UsersNotificationPreferencesUpdateRelationInput = {
  connect?: Maybe<Array<NotificationPreferenceKeyFilter>>;
  reconnect?: Maybe<Array<NotificationPreferenceKeyFilter>>;
  create?: Maybe<Array<Maybe<User_NotificationPreferenceCreateInput>>>;
  update?: Maybe<Array<Maybe<User_NotificationPreferenceUpdateInput>>>;
};

export type UsersNotificationsRelationInput = {
  connect?: Maybe<Array<NotificationKeyFilter>>;
  create?: Maybe<Array<Maybe<Users_NotificationCreateInput>>>;
};

export type UsersNotificationsUpdateRelationInput = {
  connect?: Maybe<Array<NotificationKeyFilter>>;
  disconnect?: Maybe<Array<NotificationKeyFilter>>;
  reconnect?: Maybe<Array<NotificationKeyFilter>>;
  create?: Maybe<Array<Maybe<Users_NotificationCreateInput>>>;
  update?: Maybe<Array<Maybe<Users_NotificationUpdateInput>>>;
};

export type UserSort = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  company?: Maybe<SortOrder>;
  status?: Maybe<SortOrder>;
  origin?: Maybe<SortOrder>;
  is8base?: Maybe<SortOrder>;
  firstName?: Maybe<SortOrder>;
  mobileNumber?: Maybe<SortOrder>;
  lastName?: Maybe<SortOrder>;
  timezone?: Maybe<SortOrder>;
  createdBy?: Maybe<UserSort>;
  avatar?: Maybe<FileSort>;
};

export type UsersOwnedAccountsRelationInput = {
  connect?: Maybe<Array<AccountKeyFilter>>;
  create?: Maybe<Array<Maybe<Owner_AccountCreateInput>>>;
};

export type UsersOwnedAccountsUpdateRelationInput = {
  connect?: Maybe<Array<AccountKeyFilter>>;
  reconnect?: Maybe<Array<AccountKeyFilter>>;
  create?: Maybe<Array<Maybe<Owner_AccountCreateInput>>>;
  update?: Maybe<Array<Maybe<Owner_AccountUpdateInput>>>;
};

export type UsersRolesRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<Users_RoleCreateInput>>>;
};

export type UsersRolesUpdateRelationInput = {
  connect?: Maybe<Array<RoleKeyFilter>>;
  disconnect?: Maybe<Array<RoleKeyFilter>>;
  reconnect?: Maybe<Array<RoleKeyFilter>>;
  create?: Maybe<Array<Maybe<Users_RoleCreateInput>>>;
  update?: Maybe<Array<Maybe<Users_RoleUpdateInput>>>;
};

export type UserSubscriptionFilter = {
  mutation_in?: Maybe<Array<Maybe<MutationType>>>;
  node?: Maybe<UserFilter>;
  updatedFields?: Maybe<UpdatedFieldsFilter>;
};

export type UserUpdateInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  avatar?: Maybe<UsersAvatarUpdateRelationInput>;
  carRegistrationNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  roles?: Maybe<UsersRolesUpdateRelationInput>;
  notifications?: Maybe<UsersNotificationsUpdateRelationInput>;
  adminAccounts?: Maybe<UsersAdminAccountsUpdateRelationInput>;
  memberAccounts?: Maybe<UsersMemberAccountsUpdateRelationInput>;
  ownedAccounts?: Maybe<UsersOwnedAccountsUpdateRelationInput>;
  groups?: Maybe<UsersGroupsUpdateRelationInput>;
  notificationPreferences?: Maybe<UsersNotificationPreferencesUpdateRelationInput>;
};

export type UuidFieldTypeAttributes = {
  __typename?: 'UUIDFieldTypeAttributes';
  fieldSize?: Maybe<Scalars['Int']>;
};

export type VerificationEmailResendInput = {
  email: Scalars['String'];
};

export type ViewCreateInput = {
  name: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  query: Scalars['String'];
};

export type WorkspaceCreateMutationInput = {
  name: Scalars['String'];
  billingPlanId?: Maybe<Scalars['ID']>;
};

export type WorkspaceCreateResponse = {
  __typename?: 'WorkspaceCreateResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type WorkspaceDeleteMutationInput = {
  id: Scalars['ID'];
};

export type WorkspaceInfo = {
  __typename?: 'WorkspaceInfo';
  workspace?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type WorkspaceItem = {
  __typename?: 'WorkspaceItem';
  id: Scalars['ID'];
  name: Scalars['String'];
  isOwner: Scalars['Boolean'];
  plan?: Maybe<BillingCurrentPlanResponse>;
};

export type WorkspaceListResponse = {
  __typename?: 'WorkspaceListResponse';
  items: Array<WorkspaceItem>;
  count: Scalars['Int'];
};

export enum WorkspaceStatus {
  Active = 'active',
  Blocked = 'blocked',
  Canceled = 'canceled',
  Suspended = 'suspended',
  Canceling = 'canceling',
  Pending = 'pending',
}

export type WorkspaceUpdateMutationInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type WorkspaceUpdateResponse = {
  __typename?: 'WorkspaceUpdateResponse';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};
export type Get_Accounts_And_UserQueryVariables = {};

export type Get_Accounts_And_UserQuery = { __typename?: 'Query' } & {
  user: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'email' | 'lastName' | 'firstName'>>;
  accountsList: { __typename?: 'AccountListResponse' } & {
    items: Array<{ __typename?: 'Account' } & Pick<Account, 'id' | 'name'>>;
  };
};
