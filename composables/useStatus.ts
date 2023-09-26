export default function useStatus() {
  const StatusMap = {
    draft: {
      label: 'Entwurf',
      color: 'bg-indigo-50 ring-indigo-700/10 text-indigo-700'
    },
    proposed: {
      label: 'Vorgeschlagen',
      color: 'bg-yellow-50 ring-yellow-700/10 text-yellow-700'
    },
    verified: {
      label: 'Verifiziert',
      color: 'bg-green-50 ring-green-700/10 text-green-700'
    },
    pending: {
      label: 'Ausstehend',
      color: 'bg-blue-50 ring-blue-700/10 text-blue-700'
    },
    archived: {
      label: 'Archiviert',
      color: 'bg-red-50 ring-red-700/10 text-red-700'
    },
    system_import: {
      label: 'Auto Import',
      color: 'bg-red-50 ring-red-700/10 text-red-700'
    },
  }

  return {
    StatusMap
  }
}