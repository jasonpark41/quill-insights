import React, { useState, useRef } from "react";
import { Sidebar } from "./Sidebar";
import { DashboardHeader } from "./DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Users, FileCheck, Settings, CheckCircle, Download, Mail, Send } from "lucide-react";

const PurchasingManager = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [period, setPeriod] = useState("Monthly");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    requestorName: "",
    department: "",
    approverEmail: "",
    orderLimit: "",
    shipToAddress: "",
    billToAddress: "",
    role: "",
    specialInstructions: ""
  });

  // Dummy handler for export buttons
  const handleExport = () => {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Purchase request submitted successfully!");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <button
        className="fixed top-4 left-4 z-50 bg-primary text-white p-2 rounded"
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Header */}
      <DashboardHeader
        handleExport={handleExport}
        dropdownRef={dropdownRef}
        open={open}
        setOpen={setOpen}
        period={period}
        setPeriod={setPeriod}
      />

      {/* Purchasing Manager content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 font-montserrat" style={{ color: "#000" }}>Purchasing Manager</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Streamline purchase requests, approvals, and tracking for increased efficiency.
          </p>
        </div>

        {/* What is Purchasing Manager */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-montserrat">What is Purchasing Manager</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Purchasing manager gives you better control of your organization's purchases, saving your business both time and money.
            </p>
            <div className="bg-healthcare-mint/10 border border-healthcare-mint/20 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Simple Setup Process:</h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <span>Fill out form below</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <span>Submit request</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">✓</div>
                  <span>Get instant confirmation</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Purchase Request Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-montserrat">Setup Purchase Request</CardTitle>
            <p className="text-muted-foreground">
              Configure your purchasing hierarchy and approval workflow
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
                

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="role">Role</Label>
                  <Select
                    value={formData.role || ""}
                    onValueChange={(value) => handleInputChange("role", value)}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Administrator">Administrator</SelectItem>
                      <SelectItem value="Approver">Approver</SelectItem>
                      <SelectItem value="Requestor">Requestor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName || ""}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName || ""}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email || ""}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    value={formData.phoneNumber || ""}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    placeholder="XXX-XXX-XXXX"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="accountNumber">Quill Account #</Label>
                  <Input
                    id="accountNumber"
                    value={formData.accountNumber || ""}
                    onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="shipToStreet">Ship to Street Address</Label>
                  <Input
                    id="shipToStreet"
                    value={formData.shipToStreet || ""}
                    onChange={(e) => handleInputChange("shipToStreet", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="shipToLine2">Ship to Address Line 2 (optional)</Label>
                  <Input
                    id="shipToLine2"
                    value={formData.shipToLine2 || ""}
                    onChange={(e) => handleInputChange("shipToLine2", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="shipToCity">Ship to City</Label>
                  <Input
                    id="shipToCity"
                    value={formData.shipToCity || ""}
                    onChange={(e) => handleInputChange("shipToCity", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="shipToState">Ship to State</Label>
                  <Input
                    id="shipToState"
                    value={formData.shipToState || ""}
                    onChange={(e) => handleInputChange("shipToState", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="shipToZip">Ship to Zip Code</Label>
                  <Input
                    id="shipToZip"
                    value={formData.shipToZip || ""}
                    onChange={(e) => handleInputChange("shipToZip", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="approvalNeeded">Is Approval Needed on Any Orders?</Label>
                  <Select value={formData.approvalNeeded || ""} onValueChange={(value) => handleInputChange("approvalNeeded", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="approvalLimit">If Approval Needed, Enter Dollar Limit Amount, or enter All Orders</Label>
                  <Input
                    id="approvalLimit"
                    value={formData.approvalLimit || ""}
                    onChange={(e) => handleInputChange("approvalLimit", e.target.value)}
                    placeholder="e.g., $200 or All orders"
                    disabled={formData.approvalNeeded !== "Yes"}
                  />
                </div>
                <div>
                  <Label htmlFor="approverName">If Approval Needed, Name of Approver</Label>
                  <Input
                    id="approverName"
                    value={formData.approverName || ""}
                    onChange={(e) => handleInputChange("approverName", e.target.value)}
                    disabled={formData.approvalNeeded !== "Yes"}
                  />
                </div>
                <div>
                  <Label htmlFor="approvalGroup">Approval Group Name</Label>
                  <Input
                    id="approvalGroup"
                    value={formData.approvalGroup || ""}
                    onChange={(e) => handleInputChange("approvalGroup", e.target.value)}
                  />
                </div>
                
              </div>

              <Button type="submit" className="w-full md:w-auto gap-2 mt-4">
                <Send className="h-4 w-4" />
                Submit Purchase Request
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-montserrat flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Manage Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                With Purchasing Manager, the administrator oversees the maintenance of the entire account including the management of all users. Each person in the purchasing hierarchy can be given specific rules and dollar minimums or maximums.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-montserrat flex items-center gap-2">
                <FileCheck className="h-5 w-5 text-primary" />
                My Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                The Quill.com Purchasing Manager is based on the concept of multi-level ordering. Three specific roles have been built into purchasing manager:
              </p>
              <div className="space-y-2">
                <Badge variant="outline">Requestor</Badge>
                <Badge variant="outline">Approvers</Badge>
                <Badge variant="outline">Administrators</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-montserrat flex items-center gap-2">
                <Settings className="h-5 w-5 text-primary" />
                Manage Rules
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Set up your own ordering rules and maximum order limits so you can meet the unique supply needs of your organization. Get an instant snapshot of your company's past ordering activity.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <Card>
          <CardHeader>
            <CardTitle className="font-montserrat">Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Purchasing manager allows you to quickly ensure that the right people are ordering the right supplies. Help your company maximize your control while minimizing the stress of ordering office supplies online.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PurchasingManager;