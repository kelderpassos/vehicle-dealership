import { ICar } from '../interfaces/entities/ICar';
import Controller from './Controller';
import CarsService from '../services/CarsService';

class CarsController extends Controller<ICar> {
  constructor(service = new CarsService()) {
    super(service);
  }
}

export default CarsController;