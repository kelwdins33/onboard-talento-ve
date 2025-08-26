import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Users, UserPlus, Search, Filter, FileText, Phone, Mail } from "lucide-react"

const EmployeesModule = () => {
  const employees = [
    { 
      name: "Carlos Rodríguez", 
      id: "V-12345678", 
      position: "Desarrollador Senior", 
      department: "Tecnología",
      status: "Activo",
      startDate: "2023-01-15"
    },
    { 
      name: "Ana Martínez", 
      id: "V-23456789", 
      position: "Analista de Marketing", 
      department: "Marketing",
      status: "Período Prueba",
      startDate: "2024-10-01"
    },
    { 
      name: "Luis Fernández", 
      id: "E-34567890", 
      position: "Gerente de Operaciones", 
      department: "Operaciones",
      status: "Activo",
      startDate: "2022-06-10"
    },
    { 
      name: "María Torres", 
      id: "V-45678901", 
      position: "Coordinadora RRHH", 
      department: "Recursos Humanos",
      status: "Vacaciones",
      startDate: "2023-03-20"
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Activo":
        return <Badge className="bg-success/10 text-success border-success/20">Activo</Badge>
      case "Período Prueba":
        return <Badge className="bg-warning/10 text-warning border-warning/20">Período Prueba</Badge>
      case "Vacaciones":
        return <Badge className="bg-primary/10 text-primary border-primary/20">Vacaciones</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Gestión de Empleados</h1>
          <p className="text-muted-foreground">
            Administración completa del personal y expedientes
          </p>
        </div>
        <div className="flex gap-2">
          <Button className="bg-primary hover:bg-primary-dark">
            <UserPlus className="h-4 w-4 mr-2" />
            Nuevo Empleado
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Empleados</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">247</div>
            <p className="text-xs text-muted-foreground">+3 este mes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En Período Prueba</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">6 próximos a evaluar</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expedientes</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">98% completos</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Candidatos</CardTitle>
            <Search className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">En proceso</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Lista de Empleados</CardTitle>
              <CardDescription>
                Gestión y seguimiento del personal activo
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 h-4 w-4 text-muted-foreground transform -translate-y-1/2" />
                <Input placeholder="Buscar por nombre o cédula..." className="pl-8 w-64" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {employees.map((employee, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-medium text-primary">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-medium">{employee.name}</h3>
                    <p className="text-sm text-muted-foreground">{employee.id}</p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{employee.position}</span>
                    <span className="text-xs text-muted-foreground">{employee.department}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  {getStatusBadge(employee.status)}
                  <div className="text-xs text-muted-foreground">
                    Ingreso: {employee.startDate}
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="outline" size="sm">
                    Ver Perfil
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Department Statistics */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Distribución por Departamento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { dept: "Operaciones", count: 89, percentage: 36 },
                { dept: "Administración", count: 67, percentage: 27 },
                { dept: "Tecnología", count: 45, percentage: 18 },
                { dept: "Marketing", count: 28, percentage: 11 },
                { dept: "Recursos Humanos", count: 18, percentage: 8 }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm">{item.dept}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium w-8">{item.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Validaciones Pendientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { type: "Cédulas por verificar", count: 3, priority: "high" },
                { type: "Documentos faltantes", count: 7, priority: "medium" },
                { type: "Títulos por validar", count: 2, priority: "high" },
                { type: "Referencias laborales", count: 5, priority: "low" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      item.priority === "high" ? "bg-destructive" :
                      item.priority === "medium" ? "bg-warning" : "bg-muted"
                    }`} />
                    <span className="text-sm">{item.type}</span>
                  </div>
                  <Badge variant="outline">{item.count}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default EmployeesModule