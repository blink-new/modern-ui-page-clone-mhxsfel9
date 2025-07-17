import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'
import { 
  Bell, 
  ChevronDown, 
  Edit2, 
  Check,
  Send
} from 'lucide-react'

function App() {
  const steps = [
    { id: 1, title: 'Contacts', completed: true },
    { id: 2, title: 'Channel', completed: true },
    { id: 3, title: 'Message', completed: true, current: true },
    { id: 4, title: 'Web experience', completed: false },
    { id: 5, title: 'Summary', completed: false }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-sky-300 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LM</span>
                </div>
                <span className="ml-2 text-xl font-semibold text-gray-900">Link Mobility</span>
              </div>
              <nav className="flex space-x-8">
                <a href="#" className="text-gray-900 font-medium">Campaigns</a>
                <a href="#" className="text-gray-500">Analytics</a>
                <a href="#" className="text-gray-500">Contacts</a>
                <a href="#" className="text-gray-500">Settings</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Bell className="h-5 w-5 text-gray-500" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Campaign Title */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold text-gray-900">Summer Sale Campaign</h1>
            <Edit2 className="h-4 w-4 text-gray-500" />
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              Draft
            </Badge>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className="flex items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                    ${step.completed || step.current
                      ? 'bg-sky-300 text-white' 
                      : 'bg-gray-200 text-gray-600'
                    }
                  `}>
                    {step.completed ? <Check className="h-4 w-4" /> : step.id}
                  </div>
                  <span className={`ml-3 text-sm font-medium ${
                    step.current ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    step.completed ? 'bg-sky-300' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Summary Cards */}
          <div className="col-span-2 space-y-6">
            {/* Contacts Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Contacts</h3>
                <Badge className="bg-green-100 text-green-800">2 contacts loaded</Badge>
              </div>
            </div>

            {/* Channel Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Channel</h3>
                <Badge className="bg-sky-100 text-sky-800">SMS</Badge>
              </div>
            </div>

            {/* Message Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center space-x-3 mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Message</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-800 text-sm">
                  🌞 Summer Sale Alert! Get up to 50% off on all products. Limited time offer - shop now and save big!
                </p>
              </div>
            </div>

            {/* Web Experience Card */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-400">Web experience</h3>
            </div>
          </div>

          {/* Right Column - Send Test */}
          <div>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                <Send className="h-4 w-4 mr-2" />
                Send Test
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App