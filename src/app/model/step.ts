export enum  StepType{
  CREATION_QUEOPS = 'Création QUEOPS',
  CREATION_SAP = 'Création SAP',
  POSE_QUEOPS = 'Pose QUEOPS',
  POSE_SAP = 'Pose SAP',
  MES_SAP = 'MES SAP',
  CREATION_CLIENT_G2C = "Creation Client G2C",
  PASSAGE_ACTIF_G2C = 'Passage du client à Actif G2C'
}

export enum StepStatus {
  A_VENIR = "A venir",
  OK = "Fait",
  KO = "Erreur"
}

export class Step{

  status: StepStatus;

  constructor(public type: StepType, public metaData?: String[]) {
    this.status = StepStatus.A_VENIR;

  }

  statusBadgeClass() : string {
    if(this.status == StepStatus.A_VENIR)
    {
      return 'bg-warning';
    }
    else if(this.status == StepStatus.OK){
      return 'bg-success';
    }
    else if(this.status == StepStatus.KO){
      return 'bg-danger';
    }
    return '';
  }
}
