/* tslint:disable */
/* eslint-disable */

import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateTodo: OnCreateTodoSubscription;
  onUpdateTodo: OnUpdateTodoSubscription;
  onDeleteTodo: OnDeleteTodoSubscription;
  onCreateProfile: OnCreateProfileSubscription;
  onUpdateProfile: OnUpdateProfileSubscription;
  onDeleteProfile: OnDeleteProfileSubscription;
  onCreateClub: OnCreateClubSubscription;
  onUpdateClub: OnUpdateClubSubscription;
  onDeleteClub: OnDeleteClubSubscription;
  onCreateDepartment: OnCreateDepartmentSubscription;
  onUpdateDepartment: OnUpdateDepartmentSubscription;
  onDeleteDepartment: OnDeleteDepartmentSubscription;
  onCreateEvent: OnCreateEventSubscription;
  onUpdateEvent: OnUpdateEventSubscription;
  onDeleteEvent: OnDeleteEventSubscription;
};

export type CreateTodoInput = {
  id?: string | null;
  name: string;
  description?: string | null;
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoConditionInput | null> | null;
  or?: Array<ModelTodoConditionInput | null> | null;
  not?: ModelTodoConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Todo = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTodoInput = {
  id: string;
  name?: string | null;
  description?: string | null;
};

export type DeleteTodoInput = {
  id: string;
};

export type CreateProfileInput = {
  email: string;
  firstname?: string | null;
  lastname?: string | null;
  age?: number | null;
  gender?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
};

export type ModelProfileConditionInput = {
  firstname?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  age?: ModelIntInput | null;
  gender?: ModelStringInput | null;
  street?: ModelStringInput | null;
  streetnumber?: ModelStringInput | null;
  city?: ModelStringInput | null;
  post?: ModelStringInput | null;
  country?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelProfileConditionInput | null> | null;
  or?: Array<ModelProfileConditionInput | null> | null;
  not?: ModelProfileConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Profile = {
  __typename: "Profile";
  email: string;
  firstname?: string | null;
  lastname?: string | null;
  age?: number | null;
  gender?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProfileInput = {
  email: string;
  firstname?: string | null;
  lastname?: string | null;
  age?: number | null;
  gender?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
};

export type DeleteProfileInput = {
  email: string;
};

export type CreateClubInput = {
  clubname: string;
  clubmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  contact?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  description?: string | null;
  kinds?: Array<string | null> | null;
};

export type ModelClubConditionInput = {
  clubmanagers?: ModelStringInput | null;
  clubmembers?: ModelStringInput | null;
  contact?: ModelStringInput | null;
  street?: ModelStringInput | null;
  streetnumber?: ModelStringInput | null;
  city?: ModelStringInput | null;
  post?: ModelStringInput | null;
  country?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  description?: ModelStringInput | null;
  kinds?: ModelStringInput | null;
  and?: Array<ModelClubConditionInput | null> | null;
  or?: Array<ModelClubConditionInput | null> | null;
  not?: ModelClubConditionInput | null;
};

export type Club = {
  __typename: "Club";
  clubname: string;
  clubmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  contact?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  description?: string | null;
  kinds?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateClubInput = {
  clubname: string;
  clubmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  contact?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  description?: string | null;
  kinds?: Array<string | null> | null;
};

export type DeleteClubInput = {
  clubname: string;
};

export type CreateDepartmentInput = {
  departmentname: string;
  departmentmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  kind?: string | null;
  description?: string | null;
};

export type ModelDepartmentConditionInput = {
  departmentmanagers?: ModelStringInput | null;
  clubmembers?: ModelStringInput | null;
  kind?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelDepartmentConditionInput | null> | null;
  or?: Array<ModelDepartmentConditionInput | null> | null;
  not?: ModelDepartmentConditionInput | null;
};

export type Department = {
  __typename: "Department";
  departmentname: string;
  departmentmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  kind?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDepartmentInput = {
  departmentname: string;
  departmentmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  kind?: string | null;
  description?: string | null;
};

export type DeleteDepartmentInput = {
  departmentname: string;
};

export type CreateEventInput = {
  date: string;
  eventname?: string | null;
  eventmanagers?: Array<string | null> | null;
  eventmembers?: Array<string | null> | null;
  description?: string | null;
};

export type ModelEventConditionInput = {
  eventname?: ModelStringInput | null;
  eventmanagers?: ModelStringInput | null;
  eventmembers?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelEventConditionInput | null> | null;
  or?: Array<ModelEventConditionInput | null> | null;
  not?: ModelEventConditionInput | null;
};

export type Event = {
  __typename: "Event";
  date: string;
  eventname?: string | null;
  eventmanagers?: Array<string | null> | null;
  eventmembers?: Array<string | null> | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEventInput = {
  date: string;
  eventname?: string | null;
  eventmanagers?: Array<string | null> | null;
  eventmembers?: Array<string | null> | null;
  description?: string | null;
};

export type DeleteEventInput = {
  date: string;
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelTodoFilterInput | null> | null;
  or?: Array<ModelTodoFilterInput | null> | null;
  not?: ModelTodoFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection";
  items: Array<Todo>;
  nextToken?: string | null;
};

export type ModelProfileFilterInput = {
  email?: ModelStringInput | null;
  firstname?: ModelStringInput | null;
  lastname?: ModelStringInput | null;
  age?: ModelIntInput | null;
  gender?: ModelStringInput | null;
  street?: ModelStringInput | null;
  streetnumber?: ModelStringInput | null;
  city?: ModelStringInput | null;
  post?: ModelStringInput | null;
  country?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  and?: Array<ModelProfileFilterInput | null> | null;
  or?: Array<ModelProfileFilterInput | null> | null;
  not?: ModelProfileFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection";
  items: Array<Profile>;
  nextToken?: string | null;
};

export type ModelClubFilterInput = {
  clubname?: ModelStringInput | null;
  clubmanagers?: ModelStringInput | null;
  clubmembers?: ModelStringInput | null;
  contact?: ModelStringInput | null;
  street?: ModelStringInput | null;
  streetnumber?: ModelStringInput | null;
  city?: ModelStringInput | null;
  post?: ModelStringInput | null;
  country?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  description?: ModelStringInput | null;
  kinds?: ModelStringInput | null;
  and?: Array<ModelClubFilterInput | null> | null;
  or?: Array<ModelClubFilterInput | null> | null;
  not?: ModelClubFilterInput | null;
};

export type ModelClubConnection = {
  __typename: "ModelClubConnection";
  items: Array<Club>;
  nextToken?: string | null;
};

export type ModelDepartmentFilterInput = {
  departmentname?: ModelStringInput | null;
  departmentmanagers?: ModelStringInput | null;
  clubmembers?: ModelStringInput | null;
  kind?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelDepartmentFilterInput | null> | null;
  or?: Array<ModelDepartmentFilterInput | null> | null;
  not?: ModelDepartmentFilterInput | null;
};

export type ModelDepartmentConnection = {
  __typename: "ModelDepartmentConnection";
  items: Array<Department>;
  nextToken?: string | null;
};

export type ModelEventFilterInput = {
  date?: ModelStringInput | null;
  eventname?: ModelStringInput | null;
  eventmanagers?: ModelStringInput | null;
  eventmembers?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelEventFilterInput | null> | null;
  or?: Array<ModelEventFilterInput | null> | null;
  not?: ModelEventFilterInput | null;
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection";
  items: Array<Event>;
  nextToken?: string | null;
};

export type CreateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTodoMutation = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateProfileMutation = {
  __typename: "Profile";
  email: string;
  firstname?: string | null;
  lastname?: string | null;
  age?: number | null;
  gender?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateProfileMutation = {
  __typename: "Profile";
  email: string;
  firstname?: string | null;
  lastname?: string | null;
  age?: number | null;
  gender?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteProfileMutation = {
  __typename: "Profile";
  email: string;
  firstname?: string | null;
  lastname?: string | null;
  age?: number | null;
  gender?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateClubMutation = {
  __typename: "Club";
  clubname: string;
  clubmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  contact?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  description?: string | null;
  kinds?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateClubMutation = {
  __typename: "Club";
  clubname: string;
  clubmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  contact?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  description?: string | null;
  kinds?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteClubMutation = {
  __typename: "Club";
  clubname: string;
  clubmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  contact?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  description?: string | null;
  kinds?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateDepartmentMutation = {
  __typename: "Department";
  departmentname: string;
  departmentmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  kind?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDepartmentMutation = {
  __typename: "Department";
  departmentname: string;
  departmentmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  kind?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDepartmentMutation = {
  __typename: "Department";
  departmentname: string;
  departmentmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  kind?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateEventMutation = {
  __typename: "Event";
  date: string;
  eventname?: string | null;
  eventmanagers?: Array<string | null> | null;
  eventmembers?: Array<string | null> | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateEventMutation = {
  __typename: "Event";
  date: string;
  eventname?: string | null;
  eventmanagers?: Array<string | null> | null;
  eventmembers?: Array<string | null> | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteEventMutation = {
  __typename: "Event";
  date: string;
  eventname?: string | null;
  eventmanagers?: Array<string | null> | null;
  eventmembers?: Array<string | null> | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetTodoQuery = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTodosQuery = {
  __typename: "ModelTodoConnection";
  items: Array<{
    __typename: "Todo";
    id: string;
    name: string;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type GetProfileQuery = {
  __typename: "Profile";
  email: string;
  firstname?: string | null;
  lastname?: string | null;
  age?: number | null;
  gender?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListProfilesQuery = {
  __typename: "ModelProfileConnection";
  items: Array<{
    __typename: "Profile";
    email: string;
    firstname?: string | null;
    lastname?: string | null;
    age?: number | null;
    gender?: string | null;
    street?: string | null;
    streetnumber?: string | null;
    city?: string | null;
    post?: string | null;
    country?: string | null;
    phone?: string | null;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type GetClubQuery = {
  __typename: "Club";
  clubname: string;
  clubmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  contact?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  description?: string | null;
  kinds?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListClubsQuery = {
  __typename: "ModelClubConnection";
  items: Array<{
    __typename: "Club";
    clubname: string;
    clubmanagers?: Array<string | null> | null;
    clubmembers?: Array<string | null> | null;
    contact?: string | null;
    street?: string | null;
    streetnumber?: string | null;
    city?: string | null;
    post?: string | null;
    country?: string | null;
    phone?: string | null;
    description?: string | null;
    kinds?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type GetDepartmentQuery = {
  __typename: "Department";
  departmentname: string;
  departmentmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  kind?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListDepartmentsQuery = {
  __typename: "ModelDepartmentConnection";
  items: Array<{
    __typename: "Department";
    departmentname: string;
    departmentmanagers?: Array<string | null> | null;
    clubmembers?: Array<string | null> | null;
    kind?: string | null;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type GetEventQuery = {
  __typename: "Event";
  date: string;
  eventname?: string | null;
  eventmanagers?: Array<string | null> | null;
  eventmembers?: Array<string | null> | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListEventsQuery = {
  __typename: "ModelEventConnection";
  items: Array<{
    __typename: "Event";
    date: string;
    eventname?: string | null;
    eventmanagers?: Array<string | null> | null;
    eventmembers?: Array<string | null> | null;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  }>;
  nextToken?: string | null;
};

export type OnCreateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTodoSubscription = {
  __typename: "Todo";
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateProfileSubscription = {
  __typename: "Profile";
  email: string;
  firstname?: string | null;
  lastname?: string | null;
  age?: number | null;
  gender?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateProfileSubscription = {
  __typename: "Profile";
  email: string;
  firstname?: string | null;
  lastname?: string | null;
  age?: number | null;
  gender?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteProfileSubscription = {
  __typename: "Profile";
  email: string;
  firstname?: string | null;
  lastname?: string | null;
  age?: number | null;
  gender?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateClubSubscription = {
  __typename: "Club";
  clubname: string;
  clubmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  contact?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  description?: string | null;
  kinds?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateClubSubscription = {
  __typename: "Club";
  clubname: string;
  clubmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  contact?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  description?: string | null;
  kinds?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteClubSubscription = {
  __typename: "Club";
  clubname: string;
  clubmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  contact?: string | null;
  street?: string | null;
  streetnumber?: string | null;
  city?: string | null;
  post?: string | null;
  country?: string | null;
  phone?: string | null;
  description?: string | null;
  kinds?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateDepartmentSubscription = {
  __typename: "Department";
  departmentname: string;
  departmentmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  kind?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDepartmentSubscription = {
  __typename: "Department";
  departmentname: string;
  departmentmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  kind?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDepartmentSubscription = {
  __typename: "Department";
  departmentname: string;
  departmentmanagers?: Array<string | null> | null;
  clubmembers?: Array<string | null> | null;
  kind?: string | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateEventSubscription = {
  __typename: "Event";
  date: string;
  eventname?: string | null;
  eventmanagers?: Array<string | null> | null;
  eventmembers?: Array<string | null> | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateEventSubscription = {
  __typename: "Event";
  date: string;
  eventname?: string | null;
  eventmanagers?: Array<string | null> | null;
  eventmembers?: Array<string | null> | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteEventSubscription = {
  __typename: "Event";
  date: string;
  eventname?: string | null;
  eventmanagers?: Array<string | null> | null;
  eventmembers?: Array<string | null> | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTodo(
    input: CreateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<CreateTodoMutation> {
    const statement = `mutation CreateTodo($input: CreateTodoInput!, $condition: ModelTodoConditionInput) {
        createTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTodoMutation>response.data.createTodo;
  }
  async UpdateTodo(
    input: UpdateTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<UpdateTodoMutation> {
    const statement = `mutation UpdateTodo($input: UpdateTodoInput!, $condition: ModelTodoConditionInput) {
        updateTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTodoMutation>response.data.updateTodo;
  }
  async DeleteTodo(
    input: DeleteTodoInput,
    condition?: ModelTodoConditionInput
  ): Promise<DeleteTodoMutation> {
    const statement = `mutation DeleteTodo($input: DeleteTodoInput!, $condition: ModelTodoConditionInput) {
        deleteTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTodoMutation>response.data.deleteTodo;
  }
  async CreateProfile(
    input: CreateProfileInput,
    condition?: ModelProfileConditionInput
  ): Promise<CreateProfileMutation> {
    const statement = `mutation CreateProfile($input: CreateProfileInput!, $condition: ModelProfileConditionInput) {
        createProfile(input: $input, condition: $condition) {
          __typename
          email
          firstname
          lastname
          age
          gender
          street
          streetnumber
          city
          post
          country
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProfileMutation>response.data.createProfile;
  }
  async UpdateProfile(
    input: UpdateProfileInput,
    condition?: ModelProfileConditionInput
  ): Promise<UpdateProfileMutation> {
    const statement = `mutation UpdateProfile($input: UpdateProfileInput!, $condition: ModelProfileConditionInput) {
        updateProfile(input: $input, condition: $condition) {
          __typename
          email
          firstname
          lastname
          age
          gender
          street
          streetnumber
          city
          post
          country
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProfileMutation>response.data.updateProfile;
  }
  async DeleteProfile(
    input: DeleteProfileInput,
    condition?: ModelProfileConditionInput
  ): Promise<DeleteProfileMutation> {
    const statement = `mutation DeleteProfile($input: DeleteProfileInput!, $condition: ModelProfileConditionInput) {
        deleteProfile(input: $input, condition: $condition) {
          __typename
          email
          firstname
          lastname
          age
          gender
          street
          streetnumber
          city
          post
          country
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProfileMutation>response.data.deleteProfile;
  }
  async CreateClub(
    input: CreateClubInput,
    condition?: ModelClubConditionInput
  ): Promise<CreateClubMutation> {
    const statement = `mutation CreateClub($input: CreateClubInput!, $condition: ModelClubConditionInput) {
        createClub(input: $input, condition: $condition) {
          __typename
          clubname
          clubmanagers
          clubmembers
          contact
          street
          streetnumber
          city
          post
          country
          phone
          description
          kinds
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateClubMutation>response.data.createClub;
  }
  async UpdateClub(
    input: UpdateClubInput,
    condition?: ModelClubConditionInput
  ): Promise<UpdateClubMutation> {
    const statement = `mutation UpdateClub($input: UpdateClubInput!, $condition: ModelClubConditionInput) {
        updateClub(input: $input, condition: $condition) {
          __typename
          clubname
          clubmanagers
          clubmembers
          contact
          street
          streetnumber
          city
          post
          country
          phone
          description
          kinds
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateClubMutation>response.data.updateClub;
  }
  async DeleteClub(
    input: DeleteClubInput,
    condition?: ModelClubConditionInput
  ): Promise<DeleteClubMutation> {
    const statement = `mutation DeleteClub($input: DeleteClubInput!, $condition: ModelClubConditionInput) {
        deleteClub(input: $input, condition: $condition) {
          __typename
          clubname
          clubmanagers
          clubmembers
          contact
          street
          streetnumber
          city
          post
          country
          phone
          description
          kinds
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteClubMutation>response.data.deleteClub;
  }
  async CreateDepartment(
    input: CreateDepartmentInput,
    condition?: ModelDepartmentConditionInput
  ): Promise<CreateDepartmentMutation> {
    const statement = `mutation CreateDepartment($input: CreateDepartmentInput!, $condition: ModelDepartmentConditionInput) {
        createDepartment(input: $input, condition: $condition) {
          __typename
          departmentname
          departmentmanagers
          clubmembers
          kind
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDepartmentMutation>response.data.createDepartment;
  }
  async UpdateDepartment(
    input: UpdateDepartmentInput,
    condition?: ModelDepartmentConditionInput
  ): Promise<UpdateDepartmentMutation> {
    const statement = `mutation UpdateDepartment($input: UpdateDepartmentInput!, $condition: ModelDepartmentConditionInput) {
        updateDepartment(input: $input, condition: $condition) {
          __typename
          departmentname
          departmentmanagers
          clubmembers
          kind
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDepartmentMutation>response.data.updateDepartment;
  }
  async DeleteDepartment(
    input: DeleteDepartmentInput,
    condition?: ModelDepartmentConditionInput
  ): Promise<DeleteDepartmentMutation> {
    const statement = `mutation DeleteDepartment($input: DeleteDepartmentInput!, $condition: ModelDepartmentConditionInput) {
        deleteDepartment(input: $input, condition: $condition) {
          __typename
          departmentname
          departmentmanagers
          clubmembers
          kind
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDepartmentMutation>response.data.deleteDepartment;
  }
  async CreateEvent(
    input: CreateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<CreateEventMutation> {
    const statement = `mutation CreateEvent($input: CreateEventInput!, $condition: ModelEventConditionInput) {
        createEvent(input: $input, condition: $condition) {
          __typename
          date
          eventname
          eventmanagers
          eventmembers
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEventMutation>response.data.createEvent;
  }
  async UpdateEvent(
    input: UpdateEventInput,
    condition?: ModelEventConditionInput
  ): Promise<UpdateEventMutation> {
    const statement = `mutation UpdateEvent($input: UpdateEventInput!, $condition: ModelEventConditionInput) {
        updateEvent(input: $input, condition: $condition) {
          __typename
          date
          eventname
          eventmanagers
          eventmembers
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEventMutation>response.data.updateEvent;
  }
  async DeleteEvent(
    input: DeleteEventInput,
    condition?: ModelEventConditionInput
  ): Promise<DeleteEventMutation> {
    const statement = `mutation DeleteEvent($input: DeleteEventInput!, $condition: ModelEventConditionInput) {
        deleteEvent(input: $input, condition: $condition) {
          __typename
          date
          eventname
          eventmanagers
          eventmembers
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEventMutation>response.data.deleteEvent;
  }
  async GetTodo(id: string): Promise<GetTodoQuery> {
    const statement = `query GetTodo($id: ID!) {
        getTodo(id: $id) {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTodoQuery>response.data.getTodo;
  }
  async ListTodos(
    filter?: ModelTodoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTodosQuery> {
    const statement = `query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTodosQuery>response.data.listTodos;
  }
  async GetProfile(email: string): Promise<GetProfileQuery> {
    const statement = `query GetProfile($email: String!) {
        getProfile(email: $email) {
          __typename
          email
          firstname
          lastname
          age
          gender
          street
          streetnumber
          city
          post
          country
          phone
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      email
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProfileQuery>response.data.getProfile;
  }
  async ListProfiles(
    email?: string,
    filter?: ModelProfileFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListProfilesQuery> {
    const statement = `query ListProfiles($email: String, $filter: ModelProfileFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listProfiles(email: $email, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            email
            firstname
            lastname
            age
            gender
            street
            streetnumber
            city
            post
            country
            phone
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (email) {
      gqlAPIServiceArguments.email = email;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProfilesQuery>response.data.listProfiles;
  }
  async GetClub(clubname: string): Promise<GetClubQuery> {
    const statement = `query GetClub($clubname: String!) {
        getClub(clubname: $clubname) {
          __typename
          clubname
          clubmanagers
          clubmembers
          contact
          street
          streetnumber
          city
          post
          country
          phone
          description
          kinds
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      clubname
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetClubQuery>response.data.getClub;
  }
  async ListClubs(
    clubname?: string,
    filter?: ModelClubFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListClubsQuery> {
    const statement = `query ListClubs($clubname: String, $filter: ModelClubFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listClubs(clubname: $clubname, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            clubname
            clubmanagers
            clubmembers
            contact
            street
            streetnumber
            city
            post
            country
            phone
            description
            kinds
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (clubname) {
      gqlAPIServiceArguments.clubname = clubname;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListClubsQuery>response.data.listClubs;
  }
  async GetDepartment(departmentname: string): Promise<GetDepartmentQuery> {
    const statement = `query GetDepartment($departmentname: String!) {
        getDepartment(departmentname: $departmentname) {
          __typename
          departmentname
          departmentmanagers
          clubmembers
          kind
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      departmentname
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDepartmentQuery>response.data.getDepartment;
  }
  async ListDepartments(
    departmentname?: string,
    filter?: ModelDepartmentFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListDepartmentsQuery> {
    const statement = `query ListDepartments($departmentname: String, $filter: ModelDepartmentFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listDepartments(departmentname: $departmentname, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            departmentname
            departmentmanagers
            clubmembers
            kind
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (departmentname) {
      gqlAPIServiceArguments.departmentname = departmentname;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDepartmentsQuery>response.data.listDepartments;
  }
  async GetEvent(date: string): Promise<GetEventQuery> {
    const statement = `query GetEvent($date: String!) {
        getEvent(date: $date) {
          __typename
          date
          eventname
          eventmanagers
          eventmembers
          description
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      date
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEventQuery>response.data.getEvent;
  }
  async ListEvents(
    date?: string,
    filter?: ModelEventFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListEventsQuery> {
    const statement = `query ListEvents($date: String, $filter: ModelEventFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listEvents(date: $date, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            date
            eventname
            eventmanagers
            eventmembers
            description
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (date) {
      gqlAPIServiceArguments.date = date;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEventsQuery>response.data.listEvents;
  }
  OnCreateTodoListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTodo">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTodo {
        onCreateTodo {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateTodo">>
  >;

  OnUpdateTodoListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTodo">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTodo {
        onUpdateTodo {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateTodo">>
  >;

  OnDeleteTodoListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTodo">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTodo {
        onDeleteTodo {
          __typename
          id
          name
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteTodo">>
  >;

  OnCreateProfileListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProfile">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateProfile {
        onCreateProfile {
          __typename
          email
          firstname
          lastname
          age
          gender
          street
          streetnumber
          city
          post
          country
          phone
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProfile">>
  >;

  OnUpdateProfileListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProfile">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateProfile {
        onUpdateProfile {
          __typename
          email
          firstname
          lastname
          age
          gender
          street
          streetnumber
          city
          post
          country
          phone
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProfile">>
  >;

  OnDeleteProfileListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProfile">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteProfile {
        onDeleteProfile {
          __typename
          email
          firstname
          lastname
          age
          gender
          street
          streetnumber
          city
          post
          country
          phone
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProfile">>
  >;

  OnCreateClubListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateClub">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateClub {
        onCreateClub {
          __typename
          clubname
          clubmanagers
          clubmembers
          contact
          street
          streetnumber
          city
          post
          country
          phone
          description
          kinds
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateClub">>
  >;

  OnUpdateClubListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateClub">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateClub {
        onUpdateClub {
          __typename
          clubname
          clubmanagers
          clubmembers
          contact
          street
          streetnumber
          city
          post
          country
          phone
          description
          kinds
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateClub">>
  >;

  OnDeleteClubListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteClub">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteClub {
        onDeleteClub {
          __typename
          clubname
          clubmanagers
          clubmembers
          contact
          street
          streetnumber
          city
          post
          country
          phone
          description
          kinds
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteClub">>
  >;

  OnCreateDepartmentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDepartment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDepartment {
        onCreateDepartment {
          __typename
          departmentname
          departmentmanagers
          clubmembers
          kind
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDepartment">>
  >;

  OnUpdateDepartmentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDepartment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDepartment {
        onUpdateDepartment {
          __typename
          departmentname
          departmentmanagers
          clubmembers
          kind
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDepartment">>
  >;

  OnDeleteDepartmentListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDepartment">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDepartment {
        onDeleteDepartment {
          __typename
          departmentname
          departmentmanagers
          clubmembers
          kind
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDepartment">>
  >;

  OnCreateEventListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEvent">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateEvent {
        onCreateEvent {
          __typename
          date
          eventname
          eventmanagers
          eventmembers
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEvent">>
  >;

  OnUpdateEventListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEvent">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateEvent {
        onUpdateEvent {
          __typename
          date
          eventname
          eventmanagers
          eventmembers
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEvent">>
  >;

  OnDeleteEventListener: Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEvent">>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteEvent {
        onDeleteEvent {
          __typename
          date
          eventname
          eventmanagers
          eventmembers
          description
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEvent">>
  >;
}
