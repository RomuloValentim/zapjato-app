export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Role = 'owner' | 'employee' | 'admin'
export type OrderStatus = 'waiting' | 'in_progress' | 'ready' | 'delivered' | 'cancelled'
export type PaymentStatus = 'pending' | 'paid' | 'refunded'
export type TransactionType = 'income' | 'expense'

export interface Database {
  public: {
    Tables: {
      tenants: {
        Row: {
          id: string
          name: string
          slug: string
          phone: string | null
          whatsapp_instance: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          phone?: string | null
          whatsapp_instance?: string | null
          created_at?: string
          updated_at: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          phone?: string | null
          whatsapp_instance?: string | null
          created_at?: string
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          id: string
          tenant_id: string
          full_name: string
          role: Role
          phone: string | null
          created_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          full_name: string
          role: Role
          phone?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          tenant_id?: string
          full_name?: string
          role?: Role
          phone?: string | null
          created_at?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          id: string
          tenant_id: string
          name: string
          phone: string
          cpf: string | null
          notes: string | null
          created_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          name: string
          phone: string
          cpf?: string | null
          notes?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          tenant_id?: string
          name?: string
          phone?: string
          cpf?: string | null
          notes?: string | null
          created_at?: string
        }
        Relationships: []
      }
      vehicles: {
        Row: {
          id: string
          tenant_id: string
          customer_id: string
          plate: string
          model: string
          color: string | null
          category: string | null
          created_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          customer_id: string
          plate: string
          model: string
          color?: string | null
          category?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          tenant_id?: string
          customer_id?: string
          plate?: string
          model?: string
          color?: string | null
          category?: string | null
          created_at?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          id: string
          tenant_id: string
          name: string
          description: string | null
          price: number
          estimated_minutes: number
          active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          name: string
          description?: string | null
          price: number
          estimated_minutes: number
          active: boolean
          created_at?: string
        }
        Update: {
          id?: string
          tenant_id?: string
          name?: string
          description?: string | null
          price?: number
          estimated_minutes?: number
          active?: boolean
          created_at?: string
        }
        Relationships: []
      }
      wash_orders: {
        Row: {
          id: string
          tenant_id: string
          customer_id: string
          vehicle_id: string
          service_id: string
          status: OrderStatus
          payment_status: PaymentStatus
          total_price: number
          notes: string | null
          started_at: string | null
          finished_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          customer_id: string
          vehicle_id: string
          service_id: string
          status: OrderStatus
          payment_status: PaymentStatus
          total_price: number
          notes?: string | null
          started_at?: string | null
          finished_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          tenant_id?: string
          customer_id?: string
          vehicle_id?: string
          service_id?: string
          status?: OrderStatus
          payment_status?: PaymentStatus
          total_price?: number
          notes?: string | null
          started_at?: string | null
          finished_at?: string | null
          created_at?: string
        }
        Relationships: []
      }
      financial_transactions: {
        Row: {
          id: string
          tenant_id: string
          wash_order_id: string | null
          type: TransactionType
          amount: number
          description: string
          category: string
          created_at: string
        }
        Insert: {
          id?: string
          tenant_id: string
          wash_order_id?: string | null
          type: TransactionType
          amount: number
          description: string
          category: string
          created_at?: string
        }
        Update: {
          id?: string
          tenant_id?: string
          wash_order_id?: string | null
          type?: TransactionType
          amount?: number
          description?: string
          category?: string
          created_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
